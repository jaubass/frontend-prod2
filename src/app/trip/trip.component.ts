import { Component } from '@angular/core';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css'],
})
export class TripComponent {
  public selectedDay: number;

  constructor() {
    this.selectedDay = 1; // Establecer un día predeterminado
  }

  // Manejar el evento de selección de día desde el componente DaysComponent
  onDaySelected(selectedDay: number) {
    this.selectedDay = selectedDay;
  }

  // Manejar el evento de reproducción de video desde el componente PlayerComponent
  onPlayVideo(videoUrl: string) {
    // Lógica para reproducir el video en PlayerComponent
  }
  
}
