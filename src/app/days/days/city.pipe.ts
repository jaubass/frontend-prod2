import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityPipe'
})
export class CityPipe implements PipeTransform {
  transform(items: any[], city: string): any[] {
    if (!items) return [];
    if (!city) return items;

    return items.filter(item => item.ciudad.toLowerCase().includes(city.toLowerCase()));
  }
}
