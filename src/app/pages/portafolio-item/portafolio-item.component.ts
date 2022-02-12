import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectoDescripcion } from 'src/app/interfaces/proyecto-descripcion';
import { ProyectosService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styleUrls: ['./portafolio-item.component.scss']
})
export class PortafolioItemComponent implements OnInit {

  proyecto: any;
  id: any;
  

  constructor(private route:  ActivatedRoute, public proyectoService : ProyectosService) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros => {
      // console.log(parametros['id']);
      this.proyectoService.getProyecto(parametros['id'])
      .subscribe((proyecto: any ) => {
        this.id = parametros['id'];
        this.proyecto=proyecto;
        // console.log(proyecto);
      });


    });
  }

}
