import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PacienteComponent} from './Paciente.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    PacienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [PacienteComponent]
})
export class PacienteModule { }