import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Listarpremio } from './listarpremio/listarpremio';
import { BuscarPremiosComponent } from './buscar-premios/buscar-premios.component';

@Component({
  selector: 'app-premio',
  imports: [RouterOutlet,Listarpremio,BuscarPremiosComponent],
  templateUrl: './premio.html',
  styleUrl: './premio.css'
})
export class Premio {
  constructor(public route:ActivatedRoute){}
}
