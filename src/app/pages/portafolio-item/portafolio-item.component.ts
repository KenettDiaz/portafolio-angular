import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styleUrls: ['./portafolio-item.component.scss']
})
export class PortafolioItemComponent implements OnInit {

  constructor(private route:  ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros => {

      console.log(parametros['id']);
    });
  }

}
