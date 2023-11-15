import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './../data.service';

@Component({
  selector: 'app-add-destino',
  templateUrl: './add-destino.component.html',
  styleUrls: ['./add-destino.component.css']
})
export class AddDestinoComponent {

  formulario: FormGroup;
  mensaje: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.formulario = this.formBuilder.group({
      numero_dia: ['', Validators.required],
      ciudad: ['', Validators.required],
      alojamiento: ['', Validators.required],
      actividades: [''],
      descripcion: ['', Validators.required],
      video_resumen: ['', Validators.required],
      valoracion: ['', [Validators.required, Validators.min(0), Validators.max(5)]]
    });
  }

  async onSubmit() {
    const actividadesArray = this.formulario.value.actividades
      .split('\n')
      .map((item: string) => item.trim())
      .filter((item: string) => item !== '');
    this.formulario.patchValue({ actividades: actividadesArray });

    if (this.formulario.valid) {
      const response = await this.dataService.addDay(this.formulario.value);

      if (response) {
        this.mensaje = '¡Datos agregados correctamente!';
      } else {
        this.mensaje = 'Error al agregar los datos. Por favor, intenta nuevamente.';
        console.error('Error al enviar los datos a Firebase');
      }

      this.resetForm();
    } else {
      this.mensaje = 'Por favor, completa correctamente los campos requeridos.';
    }
  }

  resetForm() {
    this.formulario.reset();
  }
}
