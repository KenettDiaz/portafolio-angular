import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) { 

    console.log('Servicio de infoPagina Listo');
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
     //leer archivos json file

     this.http.get('assets/data/data-pagina.json')
     .subscribe( (resp: InfoPagina) =>{
       this.cargada = true; 
       this.info = resp;
      //  console.log( resp );
     });
  }

  private cargarEquipo(){
    //leer archivos json de firebase

    this.http.get('https://angular-html-b2535-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp: any) =>{
      
      this.equipo = resp;
      // console.log( resp );
    });
    
    
    //this.equipo = resp
  }

}
