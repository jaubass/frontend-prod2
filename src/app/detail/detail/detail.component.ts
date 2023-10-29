import { Component } from '@angular/core';
import { DataService } from './../../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  public days: number = 1; // Por defecto, mostraremos el día 1

  // Datos del viaje
  jsonDato: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.jsonDato = data;
    });
  }

}
