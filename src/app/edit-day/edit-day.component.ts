import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './../data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  Storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  UploadTaskSnapshot
} from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-day',
  templateUrl: './edit-day.component.html',
  styleUrls: ['./edit-day.component.css']
})
export class EditDayComponent {

  private readonly storage: Storage = inject(Storage);
  dayNum = 0;
  jsonDato: Array<any> = [];
  backLink: string = '';
  formulario: FormGroup;
  mensaje: string = '';
  fileName: string = '';
  oldVideoPath: string = '';
  public inputFiles: HTMLInputElement | undefined;

  constructor(
    private dataService: DataService,
    private readonly route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    // private http: HttpClient
  ) {
    this.formulario = this.formBuilder.group({
      id: ['', Validators.required],
      numero_dia: ['', Validators.required],
      ciudad: ['', Validators.required],
      alojamiento: ['', Validators.required],
      actividades: [''],
      descripcion: ['', Validators.required],
      video_resumen: [''],
      valoracion: ['', [Validators.required, Validators.min(0), Validators.max(5)]]
    });
  }

  async onSubmit() {

    this.mensaje = "Por favor, espera mientras se actualizan los datos. El vídeo puede tardar en cargarse...";

    const actividadesArray = this.formulario.value.actividades
      .split('\n')
      .map((item: string) => item.trim())
      .filter((item: string) => item !== '');

    this.formulario.patchValue({ actividades: actividadesArray });

    if (this.formulario.valid) {

      if (this.formulario.value.video_resumen === '') {
        // Si no hay un nuevo video, se mantiene el anterior
        this.formulario.patchValue({ video_resumen: this.oldVideoPath });

      } else {
        // Si hay nuevo vídeo, se ha de subir a Firebase
        await this.uploadFile();
      }

      const response = await this.dataService
        .updateDay(this.formulario.value);

      if (response) {
        this.mensaje = '¡Datos editados correctamente!';
        this.router.navigate([this.backLink]);
      } else {
        this.mensaje = 'Error al editar los datos. Por favor, intenta nuevamente.';
        console.error('Error al enviar los datos a Firebase');
      }

    } else {
      this.mensaje = 'Por favor, completa correctamente los campos requeridos.';
    }
  }

  async uploadFile() {

    if (this.inputFiles === undefined) { return; }

    const input: HTMLInputElement = this.inputFiles;

    console.log("Trying to upload file...", input);

    if (!input.files || !input.files[0]) { return; }

    const file: File = input.files[0];

    if (file) {
      const storageRef = ref(this.storage, 'videos/' + file.name);
      await uploadBytesResumable(storageRef, file);
    }
  }

  // resetForm() {
  //   this.formulario.reset();
  // }

  onFileSelected(event: any) {

    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      this.formulario.patchValue({ video_resumen: `videos/${this.fileName}` });
      this.inputFiles = event.target;
    }
  }

  ngOnInit(): void {
    this.dataService.getDestino().subscribe(data => {
      data.sort((a, b) => a.numero_dia - b.numero_dia);
      this.jsonDato = data;
      this.route.params.subscribe(params => {
        this.dayNum = Number(params['dayNum']);
        this.backLink = `/day/${this.dayNum}`;
        // Add retrieved data to form
        const dayData = this.jsonDato.find(item => item.numero_dia === this.dayNum);
        dayData.actividades = dayData.actividades.join('\n');
        this.formulario.patchValue(dayData);
        this.oldVideoPath = dayData.video_resumen;

        const videoPath: string = dayData.video_resumen;
        if (videoPath) {
          const storageRef = ref(this.storage, videoPath);
          getDownloadURL(storageRef)
            .then(url => {
              const videoDiv = document.getElementById('videoDivEdit');
              if (videoDiv) {
                videoDiv.innerHTML = `<video  width="320" height="240" controls>
                  <source src="${url}" type="video/mp4">
                  Your browser does not support HTML video.
                </video>`;
              }
            })
            .catch(err => console.log("No se ha podido cargar el video."));
        }
      });
    });
  }

}
