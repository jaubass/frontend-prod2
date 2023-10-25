import { Component } from '@angular/core';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent {
  public selectedCity: string = 'Ciudad por defecto';
  public days: number = 1; // Por defecto, mostraremos el día 1
  public date: Date = new Date();
  public cityFilter: string = ''

  // Método para actualizar el día seleccionado
  public updateDay(event: Event) {
    this.days = parseInt((event.target as HTMLSelectElement).value, 10);
  }

  public selectedDay: number = 1; // Por defecto, se muestra el día 1


  // Método para actualizar el día seleccionado desde la lista
public updateDayFromList(selectedDay: number) {
  this.days = selectedDay;
}

  // Datos del viaje
  public viajeData = [
    {
      "numero_dia": 1,
      "ciudad": "París",
      "alojamiento": "Hotel París",
      "actividades": ["Visita a la Torre Eiffel", "Museo del Louvre"],
      "descripcion": "Explora la hermosa ciudad de París y visita sus principales atracciones.",
      "video_resumen": "URL_del_video",
      "valoracion": 4
    },
    {
      "numero_dia": 2,
      "ciudad": "Roma",
      "alojamiento": "Hotel Roma",
      "actividades": ["Visita al Coliseo", "Tour por el Vaticano"],
      "descripcion": "Descubre la historia de Roma y sus monumentos icónicos.",
      "video_resumen": "URL_del_video",
      "valoracion": 5
    },
    {
      "numero_dia": 3,
      "ciudad": "Barcelona",
      "alojamiento": "Hotel Barcelona",
      "actividades": ["Paseo por La Rambla","Visita a la Sagrada Familia"],
      "descripcion": "Disfruta de la cultura y la arquitectura de Barcelona.",
      "video_resumen": "URL_del_video",
      "valoracion": 4
    },
    {
      "numero_dia": 4,
      "ciudad": "Tokio",
      "alojamiento": "Hotel Tokio",
      "actividades": ["Visita al Templo Senso-ji","Paseo por el Parque Ueno"],
      "descripcion": "Explora la fascinante ciudad de Tokio y sumérgete en su cultura.",
      "video_resumen": "URL_del_video",
      "valoracion": 4
    },
    {
      "numero_dia": 5,
      "ciudad": "Nueva York",
      "alojamiento": "Hotel Nueva York",
      "actividades": ["Recorrido por Times Square","Visita al Museo Metropolitano de Arte"],
      "descripcion": "Descubre la energía de la Gran Manzana y su rica escena cultural.",
      "video_resumen": "URL_del_video",
      "valoracion": 5
    },
    {
      "numero_dia": 6,
      "ciudad": "Sídney",
      "alojamiento": "Hotel Sídney",
      "actividades": ["Exploración de la Ópera de Sídney","Paseo por el Puente de la Bahía de Sídney"],
      "descripcion": "Disfruta de las maravillas naturales y arquitectónicas de Sídney.",
      "video_resumen": "URL_del_video",
      "valoracion": 4
    }
    // Agrega los demás días aquí
  ];

  // Método para actualizar la cantidad de días
  public updateDays(newDays: number) {
    this.days = newDays;
  }
}
