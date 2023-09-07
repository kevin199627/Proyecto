import { Component } from '@angular/core';
import { consulta } from './Consulta.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './consulta.html',
  styleUrls: ['./Consulta.component.css']
})
export class ConsultaComponent {
  title = 'proyecto';

  constructor(private conexion: HttpClient){

  }

  insert(consulta: consulta){
    this.conexion.post('https://citamedica-6b2b5-default-rtdb.firebaseio.com/Consulta.json',
     consulta).subscribe(
      (datos) => {
        console.log(datos);
      }

     );
     console.log(consulta);
}


}