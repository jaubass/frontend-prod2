import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import Dato from './data.interface';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';



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

  getDestino(): Observable<Dato[]> {
    const datoRef = collection(this.firestore, 'data');
    return collectionData(datoRef, { idField: 'id'}) as Observable<Dato[]>;
  }

  deleteDestino(dato: Dato) {
    const datoDocRef = doc(this.firestore, `data/${dato.id}`);
    return deleteDoc(datoDocRef);
  }


  getData(): Observable<any> {
    return this.http.get('/assets/data.json');
  }
}
