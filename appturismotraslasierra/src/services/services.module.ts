import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from 'src/app/pages/pages.module';
import { UsuarioService } from './usuario.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from 'src/app/pages/registro/registro.component';
import { AppModule } from 'src/app/app.module';
import { Usuario } from 'src/services/usuario.service';

@NgModule({
  declarations: [
    UsuarioService,
    Usuario
  ],
  imports: [
    CommonModule,
    PagesModule,
    SharedModule,
    ReactiveFormsModule,
    RegistroComponent,
    AppModule
  ]
})
export class ServicesModule { }
