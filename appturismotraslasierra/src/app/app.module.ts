import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NombreDelComponenteCLIComponent } from './nombre-del-componente-cli/nombre-del-componente-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    NombreDelComponenteCLIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
