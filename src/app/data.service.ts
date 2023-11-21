import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import Dato from './data.interface';
import {
  Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc
} from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  public selectedDaySubject = new Subject<number>();
  public selectedDay: number = 0; // Agrega esta propiedad



  setSelectedDay(day: number) {
    this.selectedDay = day; // Actualiza la propiedad con el día seleccionado
    this.selectedDaySubject.next(day);
  }

  getSelectedDay() {
    return this.selectedDaySubject.asObservable();
  }



  constructor(private http: HttpClient, private firestore: Firestore) { }

  addDay(dato: Dato) {
    const datoRef = collection(this.firestore, 'data');
    return addDoc(datoRef, dato);
  }

  async updateDay(dato: Dato) {
    const datoDocRef = doc(this.firestore, `data/${dato.id}`);
    try {
      await updateDoc(datoDocRef, {...dato});
      return true;
    } catch (error) {
      return false;
    }
  }

  getDestino(): Observable<Dato[]> {
    const datoRef = collection(this.firestore, 'data');
    return collectionData(datoRef, { idField: 'id' }) as Observable<Dato[]>;
  }

  deleteDestino(dato: Dato) {
    const datoDocRef = doc(this.firestore, `data/${dato.id}`);
    return deleteDoc(datoDocRef);
  }

  uploadFile(file: File, path: string): Observable<string> {
    const fileRef = this.firestore.ref(path);
    const task = this.firestore.upload(path, file);

    return task.snapshotChanges().pipe(
      // Puedes realizar acciones adicionales aquí si es necesario
      // Puedes obtener la URL de descarga una vez que la carga se haya completado
      // y almacenarla en tu base de datos si es necesario.
      // Ejemplo:
      // finalize(() => fileRef.getDownloadURL())
    );
  }


  getData(): Observable<any> {
    return this.http.get('/assets/data.json');
  }
}
