import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../data.service';
import {
  Storage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
  getStorage,
  getMetadata,
  listAll
} from '@angular/fire/storage';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  private readonly storage: Storage = inject(Storage);
  dayNum = 0;
  jsonDato: Array<any> = [];
  videoLink: string = '';
  editLink: string = '';
  videoUrl: string = '';

  constructor(
    private dataService: DataService,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.dataService.getDestino().subscribe(data => {
      data.sort((a, b) => a.numero_dia - b.numero_dia);
      this.jsonDato = data;
      this.route.params.subscribe(params => {
        this.dayNum = Number(params['dayNum']);
        this.videoLink = `/day/${this.dayNum}/video`;
        this.editLink = `/day/${this.dayNum}/edit`;
        const videoPath: string =
          this.jsonDato[this.dayNum - 1]?.video_resumen;
        if (videoPath) {
          const storageRef = ref(this.storage, videoPath);
          getDownloadURL(storageRef)
            .then(url => {
              const videoDiv = document.getElementById('videoDivDetail');
              if (videoDiv) {
                videoDiv.innerHTML = `<video width="320" height="240">
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
