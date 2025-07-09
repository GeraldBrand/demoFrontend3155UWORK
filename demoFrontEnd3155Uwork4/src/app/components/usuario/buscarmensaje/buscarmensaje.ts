import { Component } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { ContenidoFechaDTO } from '../../../models/ContenidoFechaDTO';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-buscarmensaje',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule
  ],
  templateUrl: './buscarmensaje.html',
  styleUrl: './buscarmensaje.css'
})
export class Buscarmensaje {
  public idUsuarioBusqueda!: number;
  displayedColumns: string[] = ['c1', 'c2'];
  
  dataSource: MatTableDataSource<ContenidoFechaDTO> = new MatTableDataSource();

  constructor(private uS: UsuarioService) {}

  buscar(): void {

    if (this.idUsuarioBusqueda) {
      this.uS.buscarMensaje(this.idUsuarioBusqueda).subscribe(data => {
        this.dataSource.data = data;
      });
    }
  }
}
