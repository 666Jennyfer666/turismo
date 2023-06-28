import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    HomeComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
