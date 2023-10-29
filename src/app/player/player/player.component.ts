import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../data.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  dia: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Accede al día seleccionado desde DataService
    this.dia = this.dataService.selectedDay;
  }
}
