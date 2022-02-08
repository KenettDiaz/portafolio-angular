import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Proyecto} from '../interfaces/proyecto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  cargando = true;


  constructor(private http: HttpClient) { 

    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get('https://angular-html-b2535-default-rtdb.firebaseio.com/proyectos.json').
    subscribe((resp: any) =>{
        console.log(resp);
        this.cargando = false;
    });
  }

}
