import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      cuallocalidadvisitaste: ['', Validators.required],
      queatraccionvisitaste: ['', Validators.required],
      brindanosopinion: ['', Validators.required]
    });
  }

  get Nombre() {
    return this.usuarioForm.get('nombre');
  }

  get Apellido() {
    return this.usuarioForm.get('apellido');
  }

  get Cuallocalidadvisitaste() {
    return this.usuarioForm.get('cuallocalidadvisitaste');
  }

  get Queatraccionvisitaste() {
    return this.usuarioForm.get('queatraccionvisitaste');
  }

  get Brindanosopinion() {
    return this.usuarioForm.get('brindanosopinion');
  }

  onEnviar() {
    if (this.usuarioForm.valid) {
      const usuarioData = this.usuarioForm.value;
      // Realizar acciones con los datos del formulario, como enviarlos a través de una API
      console.log(usuarioData);
    } else {
      // El formulario no es válido, realizar acciones correspondientes
    }
  }
}
