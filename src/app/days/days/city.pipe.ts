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

    return items.filter(
      item => item.ciudad && item.ciudad.toLowerCase()
        .includes(searchTerm)
    );
  }
}
