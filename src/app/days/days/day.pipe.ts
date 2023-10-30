import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayPipe'
})
export class DayPipe implements PipeTransform {

  transform(items: any[], day: number): any[] {


     if (!items) return [];
     if (!day) return items;
     console.log(items);
     console.log(day);
     
     

     return items.filter(item => item.numero_dia === day);

    //  item.numero_dia === day
  }
}
