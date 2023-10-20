import { Component } from '@angular/core';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent {

  // Propiedades para los días y la ciudad
  public selectedCity: string = '';  // Aquí almacenarás la ciudad seleccionada
  public days: number = 0;          // Aquí almacenarás la cantidad de días

  // Constructor
  constructor() {
    // Puedes inicializar estas propiedades en el constructor si lo deseas
    this.selectedCity = 'Ciudad por defecto';
    this.days = 0;
  }

  // Método para actualizar la ciudad seleccionada
  public updateCity(newCity: string) {
    this.selectedCity = newCity;
  }

  // Método para actualizar la cantidad de días
  public updateDays(newDays: number) {
    this.days = newDays;
  }
}





