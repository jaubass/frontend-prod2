import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SafeUrlDirective } from '../../directives/safe.directive';
import { DataService } from './../../data.service';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css'],
})

export class DaysComponent {
  public selectedCity: string = '';
  public days: number = 1; // Por defecto, mostraremos el día 1
  public date: Date = new Date();
  public cityFilter: string = ''
  public items: any[] = [];
  public selectedDay: number = 1; // Por defecto, se muestra el día 1
  public filterType: string = 'day';


  // Método para actualizar el día seleccionado
  public updateDay(event: Event) {
    this.days = parseInt((event.target as HTMLSelectElement).value, 10);
  }

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
