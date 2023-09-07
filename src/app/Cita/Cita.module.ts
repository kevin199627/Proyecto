import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CitaComponent } from './Cita.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CitaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [CitaComponent]
})
export class CitaModule { }