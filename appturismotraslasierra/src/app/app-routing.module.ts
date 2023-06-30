import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { CulturaComponent } from './pages/cultura/cultura.component';
import { FaqComponent } from './pages/faq/faq.component';
import { GastronomiaComponent } from './pages/gastronomia/gastronomia.component';
import { HospedajeComponent } from './pages/hospedaje/hospedaje.component';
import { LocalidadComponent } from './pages/localidad/localidad.component';
import { LturisticosComponent } from './pages/lturisticos/lturisticos.component';
import { NaturalezaComponent } from './pages/naturaleza/naturaleza.component';
import { NotificacionComponent } from './pages/notificacion/notificacion.component';
import { TermyconComponent } from './pages/termycon/termycon.component';
import { TransporteComponent } from './pages/transporte/transporte.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'consulta', component: ConsultaComponent },
  { path: 'cultura', component: CulturaComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'gastronomia', component: GastronomiaComponent },
  { path: 'hospedaje', component: HospedajeComponent },
  { path: 'localidad', component: LocalidadComponent },
  { path: 'lturisticos', component: LturisticosComponent },
  { path: 'naturaleza', component: NaturalezaComponent },
  { path: 'notificacion', component: NotificacionComponent },
  { path: 'termycon', component: TermyconComponent },
  { path: 'transporte', component: TransporteComponent },
  // Agrega más rutas aquí si es necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
