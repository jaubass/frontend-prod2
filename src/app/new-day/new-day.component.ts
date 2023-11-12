import { Component } from '@angular/core';

@Component({
  selector: 'app-new-day',
  templateUrl: './new-day.component.html',
  styleUrls: ['./new-day.component.css']
})
export class NewDayComponent {
  numeroDia: number;
  ciudad: string;
  alojamiento: string;
  actividades: string;
  descripcion: string;
  videoResumen: string;
  valoracion: number;

  constructor() {
    this.numeroDia = 0;
    this.ciudad = '';
    this.alojamiento = '';
    this.actividades = '';
    this.descripcion = '';
    this.videoResumen = '';
    this.valoracion = 0;
  }

  onSubmit() {
    // Aquí puedes trabajar con los datos que se han introducido en el formulario
    console.log('Número de Día:', this.numeroDia);
    console.log('Ciudad:', this.ciudad);
    console.log('Alojamiento:', this.alojamiento);
    console.log('Actividades:', this.actividades);
    console.log('Descripción:', this.descripcion);
    console.log('Video Resumen:', this.videoResumen);
    console.log('Valoración:', this.valoracion);

    // TODO: enviar los datos a un servicio o hacer alguna operación con ellos
  }
}

