import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { CulturaComponent } from './cultura/cultura.component';
import { LturisticosComponent } from './lturisticos/lturisticos.component';
import { NaturalezaComponent } from './naturaleza/naturaleza.component';
import { LocalidadComponent } from './localidad/localidad.component';
import { TransporteComponent } from './transporte/transporte.component';
import { HospedajeComponent } from './hospedaje/hospedaje.component';
import { GastronomiaComponent } from './gastronomia/gastronomia.component';
import { FaqComponent } from './faq/faq.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { TermyconComponent } from './termycon/termycon.component';
//nose
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // Resto de las rutas...
];
@NgModule({
  declarations: [
    HomeComponent,
    RegistroComponent,
    CulturaComponent,
    LturisticosComponent,
    NaturalezaComponent,
    LocalidadComponent,
    TransporteComponent,
    HospedajeComponent,
    GastronomiaComponent,
    FaqComponent,
    ConsultaComponent,
    NotificacionComponent,
    TermyconComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
