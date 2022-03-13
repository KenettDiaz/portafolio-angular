import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Proyecto} from '../interfaces/proyecto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {


  cargando = true;
  proyectos: Proyecto[] = [];
  proyectosFiltrado: Proyecto[] = [];


  constructor(private http: HttpClient) { 
    this.cargarProyectos();

  }

  private cargarProyectos(){

    return new  Promise((resolve, reject) => {
        this.http.get('https://angular-html-b2535-default-rtdb.firebaseio.com/proyectos.json').
      subscribe((resp: any) =>{
          // console.log(resp);
          this.proyectos = resp;
          this.cargando = false;  
          resolve;        
      });
    });

    
  }

  getProyecto(id : string ){
    return this.http.get(`https://angular-html-b2535-default-rtdb.firebaseio.com/proyectos-item/${id }.json`);
  }

  buscarProyecto(termino: string){

    if(this.proyectos.length === 0){
      //cargar pryectos
      this.cargarProyectos().then(()=>{
        //ejecutar despues de tener los productos
        //aplicar filtro
        this.filtrarProyectos(termino);
        
      });

    }else{
      //aplicar el filtro
      this.filtrarProyectos(termino);
     
    }

  }
  

  private filtrarProyectos(termino: string){

    
    this.proyectosFiltrado = [];

    // termino = termino.toLocaleUpperCase();
    // tituloLower.indexOf(termino) >=0
    console.log(this.proyectos);
    this.proyectos.forEach(prod =>{

      // const tituloLower = prod.titulo.toLocaleLowerCase();

      if(prod.categoria.indexOf(termino)>= 0){
        this.proyectosFiltrado.push(prod);
        
      }
      // if (prod.titulo.toLocaleLowerCase().indexOf(termino)>=0)
      // {
      //   this.proyectosFiltrado.push(prod);
      // }
    });
  }


}
