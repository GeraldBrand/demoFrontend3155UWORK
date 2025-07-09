import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Listausuariopremio } from './listausuariopremio/listausuariopremio';
import { UsuariosMasPremiosComponent } from './usuarios-mas-premios/usuarios-mas-premios.component'; 

@Component({
  selector: 'app-usuariopremio',
  imports: [RouterOutlet,Listausuariopremio,UsuariosMasPremiosComponent],
  templateUrl: './usuariopremio.html',
  styleUrl: './usuariopremio.css'
})
export class Usuariopremio {
  constructor(public route:ActivatedRoute){}
}
