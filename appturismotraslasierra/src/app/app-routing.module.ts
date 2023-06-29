import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//debo importar aqui las paginas para que las corra en mi raiz
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
