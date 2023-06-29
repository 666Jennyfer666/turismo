import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { CheckboxControlValueAccessor } from '@angular/forms';

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
  constructor() { }
}
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
// api rest de ejemplo//
  url="https://reqress.in/api/users/1";

  constructor(private http:HttpClient){
  console.log("Service Usuarios esta corriendo");
}
// el observable sirve para luego poder acceder a los datos del componente
onCrearUsuario(Usuario:Usuario):Observable<Usuario>{
  return this.http.post<Usuario>(this.url, Usuario);
}
}
// Clase de Consulta
export class UsuarioConsulta {
  nombreyapellido:string="";
  correo:string="";
  consulta:string="";
  //este es un ejemplo
  constructor() { }
}
