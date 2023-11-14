import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from './../app/data.service';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  jsonDato: Array<any> = [];

  transform(values: string[], args: string): string[]  {
    let result:string[] = [];

    for(const value of values){
      if(value.indexOf(args) > -1){
        result = [...result, value];
      }
    }
    return result;
  }

}
