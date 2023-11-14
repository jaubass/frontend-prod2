import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../data.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  jsonDato: Array<any> = [];
  dayNum = 0;
  dia: any = {};
  videoSrc: string = '';
  backLink: string = '';

  constructor(
    private dataService: DataService,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.dataService.getDestino().subscribe(data => {
      this.jsonDato = data;
      this.route.params.subscribe(params => {
        this.dayNum = Number(params['dayNum']);
        this.dia = this.jsonDato.find(
          (d: any) => d.numero_dia === this.dayNum
        ) || {};
        this.videoSrc = this.dia.video_resumen || '';
        this.backLink = `/day/${this.dayNum}`;
      });
    });
  }
}
