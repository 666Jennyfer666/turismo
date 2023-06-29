import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ServicesModule } from './services.module';
import { RegistroComponent } from './usuario/usuario.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Injectable({
  providedIn: 'root'
})
// Clase de Reseña tu experiencia
export class Usuario {
  nombre:string="";
  apellido:string="";
  cuallocalidadvisitaste:string="";
  queatraccionvisitaste:string="";
  brindanosopinion:string="";
  //este es un ejemplo
  //constructor(private http: HttpClient, private router: Router) {
  //console.log("Service Usuarios está corriendo");
 // Pasa usuarioService como argumento al crear un nuevo objeto Usuario
  constructor(private usuarioService: UsuarioService) { }
}
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = "https://reqress.in/api/users/1";

  constructor(private http: HttpClient) {
    console.log("Service Usuarios está corriendo");
  }

  onEnviar(form: FormGroup, usuario: Usuario): void {
    if (form.valid) {
      console.log("Enviando al servidor...");
      console.log(usuario);
      // Resto del código para enviar la solicitud HTTP
    } else {
      form.markAllAsTouched();
    }
  }
}


  // Lógica para guardar los datos

// el observable sirve para luego poder acceder a los datos del componente
//onCrearUsuario(Usuario:Usuario):Observable<Usuario>{
//  return this.http.post<Usuario>(this.url, Usuario);

//}
// Clase de Consulta
export class UsuarioConsulta {
  nombreyapellido:string="";
  correo:string="";
  consulta:string="";
  //este es un ejemplo

  constructor() { }

}
// Clase de Consulta
export class UsuarioNotificacion {
  nombren:string="";
  apellidon:string="";
  email:string="";
  consulta:string="";
  //este es un ejemplo
  constructor() { }
  enviarDatos(): void {

    console.log("Enviando datos:");
    console.log("Nombre: ", this.nombren);
    console.log("Apellido: ", this.apellidon);
    console.log("Email: ", this.email);
    console.log("Consulta: ", this.consulta);
  }
}
