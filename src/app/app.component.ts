import { Component } from '@angular/core';
import { Registro } from './Registro.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private conexion: HttpClient){

  }

  insert(registro: Registro){
    this.conexion.post('https://citamedica-6b2b5-default-rtdb.firebaseio.com/Registro.json',
     registro).subscribe(
      (datos) => {
        console.log(datos);
      }

     );
     console.log(registro);
}
}
