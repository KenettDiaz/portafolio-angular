import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProyectosService } from './services/proyecto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio';

  constructor(public infoPaginaService: InfoPaginaService, public proyectosService : ProyectosService) {

  }
}
