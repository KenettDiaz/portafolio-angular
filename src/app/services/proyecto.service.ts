import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Proyecto} from '../interfaces/proyecto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {


  cargando = true;
  proyectos: Proyecto[] = [];

  constructor(private http: HttpClient) { 

    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get('https://angular-html-b2535-default-rtdb.firebaseio.com/proyectos.json').
    subscribe((resp: any) =>{
        // console.log(resp);
        this.proyectos = resp;
          this.cargando = false;        
    });
  }

  getProyecto(id : string ){
    return this.http.get(`https://angular-html-b2535-default-rtdb.firebaseio.com/proyectos-item/${id }.json`);

  }

}
