import { Component } from '@angular/core';
import { DataService } from './../../data.service';

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



  // Método para actualizar la cantidad de días
  public updateDays(newDays: number) {
    this.days = newDays;
  }


  // Datos del viaje
  jsonDato: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.jsonDato = data;
    });
  }

}
