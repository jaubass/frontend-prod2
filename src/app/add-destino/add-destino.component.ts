import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from './../data.service';

@Component({
  selector: 'app-add-destino',
  templateUrl: './add-destino.component.html',
  styleUrls: ['./add-destino.component.css']
})
export class AddDestinoComponent {

  formulario: FormGroup;

  constructor(private dataService: DataService) {
    this.formulario = new FormGroup({
      numero_dia: new FormControl(),
      ciudad: new FormControl(),
      alojamiento: new FormControl(),
      actividades: new FormControl(''), // Utiliza un string en lugar de un array
      descripcion: new FormControl(),
      video_resumen: new FormControl(),
      valoracion: new FormControl(),
      id: new FormControl('')
    })
  }

  async onSubmit() {
    // Divide el valor del textarea por salto de línea
    const actividadesArray = this.formulario.value.actividades.split('\n');
    this.formulario.patchValue({ actividades: actividadesArray }); 

    console.log(this.formulario.value);
    const response = await this.dataService.addDestino(this.formulario.value);
    console.log(response);
    this.resetForm();
  }

  resetForm() {
    this.formulario.reset();
  }
}
