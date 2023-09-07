import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ConsultaComponent} from './Consulta.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ConsultaComponent]
})
export class PacienteModule { }