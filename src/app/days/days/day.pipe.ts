import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayPipe'
})

export class DayPipe implements PipeTransform {

  transform(items: any[], day: number | null): any[] {
    day = Number(day);
    if (!items) return [];
    if (!day) return items;
    return items.filter(item => item.numero_dia === day);
  }
}
