import { Component, inject } from '@angular/core';
import {
  Storage,
  ref,
  uploadBytesResumable,
  getStorage,
  getMetadata,
  listAll,
} from '@angular/fire/storage';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-storage',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css'],
})

export class UploadFormComponent {

  private readonly storage: Storage = inject(Storage);
  public files: Array<any> = [];
  public videoUrl: string = '';

  uploadFile(input: HTMLInputElement) {

    if (!input.files || !input.files[0]) return

    const file: File = input.files[0];

    if (file) {
      const storageRef = ref(this.storage, 'videos/'+file.name);
      uploadBytesResumable(storageRef, file);
    }
  }

  downloadFile(filePath: string) {
    const storageRef = ref(this.storage, filePath);


  }

  async ngOnInit() {
    const getFiles = getStorage();
    const getFilesRef = ref(getFiles, 'videos');
    console.log(getFilesRef);
    listAll(getFilesRef)
      .then(res=>{
        this.files = res.items;
        console.log(res.items);
      })
    // const meta = await getMetadata(getFilesRef);
    // console.log(meta);
  }
}