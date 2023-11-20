import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-day',
  templateUrl: './edit-day.component.html',
  styleUrls: ['./edit-day.component.css']
})
export class EditDayComponent {

  dayNum = 0;
  jsonDato: Array<any> = [];
  backLink: string = '';
  formulario: FormGroup;
  mensaje: string = '';
  fileName: string = '';

  constructor(
    private dataService: DataService,
    private readonly route: ActivatedRoute,
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
      video_resumen: ['', Validators.required],
      video_file: '',
      valoracion: ['', [Validators.required, Validators.min(0), Validators.max(5)]]
    });
  }

  async onSubmit() {
    const actividadesArray = this.formulario.value.actividades
      .split('\n')
      .map((item: string) => item.trim())
      .filter((item: string) => item !== '');

    this.formulario.patchValue({ actividades: actividadesArray });

    if (this.formulario.valid) {
      // TODO: enlazar con la función de update
      const response = await this.dataService
        .updateDay(this.formulario.value);

      if (response) {
        this.mensaje = '¡Datos editados correctamente!';
      } else {
        this.mensaje = 'Error al editar los datos. Por favor, intenta nuevamente.';
        console.error('Error al enviar los datos a Firebase');
      }

    } else {
      this.mensaje = 'Por favor, completa correctamente los campos requeridos.';
    }
  }

  // resetForm() {
  //   this.formulario.reset();
  // }

  onFileSelected(event: any) {

    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      console.log("this.fileName", this.fileName);
      const formData = new FormData();
      formData.append("videofile", file);
      /*
      const upload$ = this.http.post("/api/video-upload", formData);
      upload$.subscribe();
      */
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

      });
    });
  }

}
