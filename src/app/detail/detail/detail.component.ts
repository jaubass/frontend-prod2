import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  dayNum = 0;
  jsonDato: any = {viaje:[]};
  videoLink: string = '';

  constructor(
    private dataService: DataService,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.jsonDato = data;
      this.route.params.subscribe(params => {
        this.dayNum = Number(params['dayNum']);
        this.videoLink = `/day/${this.dayNum}/video`;
      });
    });
  }
}
