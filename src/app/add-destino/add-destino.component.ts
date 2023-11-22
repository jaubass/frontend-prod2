import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './../data.service';
import {
  Storage,
  UploadTaskSnapshot,
  ref,
  uploadBytesResumable,
} from '@angular/fire/storage';

@Component({
  selector: 'app-add-destino',
  templateUrl: './add-destino.component.html',
  styleUrls: ['./add-destino.component.css']
})

export class AddDestinoComponent {

  private readonly storage: Storage = inject(Storage);
  formulario: FormGroup;
  mensaje: string = '';
  fileName: string = '';
  public inputFiles: HTMLInputElement | undefined;
  progressNum: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.formulario = this.formBuilder.group({
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

    this.mensaje = "Por favor, espera mientras se añaden los datos. El vídeo puede tardar en cargarse...";

    const actividadesArray = this.formulario.value.actividades
      .split('\n')
      .map((item: string) => item.trim())
      .filter((item: string) => item !== '');
    this.formulario.patchValue({ actividades: actividadesArray });

    if (this.formulario.valid) {

      const response = await this.dataService.addDay(this.formulario.value);

      if (response) {

        if (this.formulario.value.video_resumen !== '') {
          // El nuevo vídeo se ha de subir a Firebase
          await this.uploadFile();
        }

        this.mensaje = '¡Datos agregados correctamente!';

      } else {
        this.mensaje = 'Error al agregar los datos. Por favor, intenta nuevamente.';
        console.error('Error al enviar los datos a Firebase');
      }

      this.resetForm();

    } else {
      this.mensaje = 'Por favor, completa correctamente los campos requeridos.';
    }
  }

  resetForm() {
    this.formulario.reset();
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

  onFileSelected(event: any) {

    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      this.formulario.patchValue({ video_resumen: `videos/${this.fileName}` });
      this.inputFiles = event.target;
    }
  }
}
