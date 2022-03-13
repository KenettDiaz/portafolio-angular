import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectosService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    public proyectosService : ProyectosService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['termino']);
      this.proyectosService.buscarProyecto(params['termino']);
    });

  }

}
