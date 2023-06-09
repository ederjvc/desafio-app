import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { UsuariosService } from './usuarios.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    UsuariosModule
  ],
  providers: [
    UsuariosService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
