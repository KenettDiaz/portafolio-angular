import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {

  constructor(public proyectosService: ProyectosService) { }

  ngOnInit(): void {
  }

}
