import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService, Usuario } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      cuallocalidadvisitaste: ['', [Validators.required]],
      queatraccionvisitaste: ['', [Validators.required]],
      brindanosopinion: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onEnviar(event: Event, usuario: Usuario): void {
    }
  get nombre() {
    return this.form.get('nombre');
  }
  
  get apellido() {
    return this.form.get('apellido');
  }
  
  get cuallocalidadvisitaste() {
    return this.form.get('cuallocalidadvisitaste');
  }
  
  get queatraccionvisitaste() {
    return this.form.get('queatraccionvisitaste');
  }
  
  get brindanosopinion() {
    return this.form.get('brindanosopinion');
  }
}