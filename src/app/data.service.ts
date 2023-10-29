import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

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


  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('/assets/data.json');
  }
}
