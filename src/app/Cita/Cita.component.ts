import { Component } from '@angular/core';
import { Cita } from './Cita.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './Cita.html',
  styleUrls: ['./Cita.component.css']
})
export class CitaComponent {
  title = 'proyecto';

  constructor(private conexion: HttpClient){

  }

  insert(cita: Cita){
    this.conexion.post('https://citamedica-6b2b5-default-rtdb.firebaseio.com/Cita.json',
     cita).subscribe(
      (datos) => {
        console.log(datos);
      }

     );
     console.log(cita);
}


}