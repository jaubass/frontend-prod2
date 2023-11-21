import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../data.service';
import {
  Storage,
  ref,
  getDownloadURL
} from '@angular/fire/storage';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  private readonly storage: Storage = inject(Storage);
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
        // this.videoSrc = this.dia.video_resumen || '';
        this.backLink = `/day/${this.dayNum}`;
        const videoPath: string = this.dia.video_resumen;
        if (videoPath) {
          const storageRef = ref(this.storage, videoPath);
          getDownloadURL(storageRef)
            .then(url => {
              const videoDiv = document.getElementById('videoDiv');
              if (videoDiv) {
                videoDiv.innerHTML = `<video width="100%" controls>
                  <source src="${url}" type="video/mp4">
                  Your browser does not support HTML video.
                </video>`;
              }
            });
        }
      });
    });
  }
}
