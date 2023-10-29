import { Component } from '@angular/core';
import { DataService } from './../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  // constructor(private route: ActivatedRoute){
  //    this.route.params.subscribe(params => console.log(params));
  // }

  public days: number = 1; // Por defecto, mostraremos el día 1

  // Datos del viaje
  jsonDato: any;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.jsonDato = data;
    });
    this.route.params.subscribe(params => console.log(params));
    // this.days=params['days']
  }

}
