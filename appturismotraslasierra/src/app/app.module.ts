import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NombreDelComponenteCLIComponent } from './nombre-del-componente-cli/nombre-del-componente-cli.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { HttpClient } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    NombreDelComponenteCLIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesModule,

    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// DESCRIPCION DE LAS CLASES//
