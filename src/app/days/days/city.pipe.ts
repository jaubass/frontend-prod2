import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityPipe'
})
export class CityPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();
    console.log(searchTerm);
    console.log(items[0].ciudad);
    
    
    return items.filter(item => item.ciudad && item.ciudad.toLowerCase().includes(searchTerm));
    // item.cuidad && item.cuidad.toLowerCase().includes(searchTerm)
  }
}
