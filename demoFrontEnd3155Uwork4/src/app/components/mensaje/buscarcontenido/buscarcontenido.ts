import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MensajeService } from '../../../services/mensaje.service';
import { BuscarContenidoDTO } from '../../../models/BuscarContenidoDTO';

@Component({
  selector: 'app-buscarcontenido',
  imports: [CommonModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule],
  templateUrl: './buscarcontenido.html',
  styleUrl: './buscarcontenido.css'
})
export class Buscarcontenido {
  public contenidoBusqueda: string = "";

  displayedColumns: string[] = ['c1', 'c2'];
  dataSource: MatTableDataSource<BuscarContenidoDTO> = new MatTableDataSource();
  constructor(private mS: MensajeService) {}
  
  buscar(): void {
    if (this.contenidoBusqueda.trim()) {
      this.mS.buscarContenido(this.contenidoBusqueda).subscribe(data => {
        this.dataSource.data = data; 
      });
    }
  }
}
