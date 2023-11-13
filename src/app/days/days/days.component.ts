import { Component } from '@angular/core';
import { DataService } from './../../data.service';
import Dato from 'src/app/data.interface';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css'],
})

export class DaysComponent {
  public selectedCity: string = '';
  public days: number = 0; // Por defecto, no mostrar ningún día
  public date: Date = new Date();
  public cityFilter: string = ''
  public items: any[] = [];
  public selectedDay: number | null = null; // Por defecto, no mostrar ningún día
  public filterType: string = 'day';
  // Datos del viaje
  public jsonDato: any = { viaje: [] };

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

  public updateFilterType(event: Event) {
    this.filterType = (event.target as HTMLSelectElement).value;
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getDestino().subscribe(data => {
    this.jsonDato = data;
    });
  }
  
  async onClickDelete(dato: Dato){
    const response = await this.dataService.deleteDestino(dato);
    console.log(response);
  }

}
