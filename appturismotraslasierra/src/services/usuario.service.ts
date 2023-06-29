import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UsuarioResena {
  nombre: string = '';
  apellido: string = '';
  cuallocalidadvisitaste: string = '';
  queatraccionvisitaste: string = '';
  brindanosopinion: string = '';

  constructor(private http: HttpClient, private router: Router) {
    console.log("Service Usuarios está corriendo");
  }

  enviarDatos(): void {
    console.log("Enviando datos:");
    console.log("Nombre: ", this.nombre);
    console.log("Apellido: ", this.apellido);
    console.log("Localidad visitada: ", this.cuallocalidadvisitaste);
    console.log("Atracción visitada: ", this.queatraccionvisitaste);
    console.log("Opinión: ", this.brindanosopinion);

    // Lógica para guardar los datos
    // this.http.post(...);
  }
}

export class UsuarioConsulta {
  nombreyapellido: string = '';
  correo: string = '';
  consulta: string = '';

  constructor() { }
}

export class UsuarioNotificacion {
  nombren: string = '';
  apellidon: string = '';
  email: string = '';
  consulta: string = '';

  constructor() { }

  enviarDatos(): void {
    console.log("Enviando datos:");
    console.log("Nombre: ", this.nombren);
    console.log("Apellido: ", this.apellidon);
    console.log("Email: ", this.email);
    console.log("Consulta: ", this.consulta);

    // Lógica para enviar la notificación
    // this.http.post(...);
  }
}