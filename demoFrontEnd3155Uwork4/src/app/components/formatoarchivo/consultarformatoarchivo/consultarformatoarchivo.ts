import { Component, OnInit } from '@angular/core';
import { FormatoarchivoService } from '../../../services/formatoarchivo.service';
import { ConsultarFormatoArchivoDTO } from '../../../models/ConsultarFormatoArchivoDTO';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consultarformatoarchivo',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule
  ],
  templateUrl: './consultarformatoarchivo.html',
  styleUrl: './consultarformatoarchivo.css'
})
export class Consultarformatoarchivo implements OnInit { 
  displayedColumns: string[] = ['c1', 'c2'];
  dataSource: MatTableDataSource<ConsultarFormatoArchivoDTO> = new MatTableDataSource();
  constructor(private faS: FormatoarchivoService) {}
  ngOnInit(): void {
    this.faS.consultarFormatoArchivo().subscribe(data => {
      this.dataSource.data = data;
    });
  }
}
