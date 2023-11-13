import { Injectable } from '@angular/core';
import { Firestore, addDoc } from '@angular/fire/firestore';
import Days from '../../app/interfaces/days.interface';
import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DaysService {

  constructor(private firestore: Firestore) { }

  addDay(day : Days) {
    const dayRef = collection(this.firestore, 'days')
    return addDoc(dayRef, day)
  }

}
