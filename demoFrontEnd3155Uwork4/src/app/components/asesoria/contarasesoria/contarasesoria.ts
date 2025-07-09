import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AsesoriaService } from '../../../services/asesoria.service';
import { ContarAsesoriaDTO } from '../../../models/ContarAsesoriaDTO';


@Component({
  selector: 'app-contarasesoria',
  imports: [MatTableModule,MatButtonModule, MatIconModule,MatPaginatorModule, CommonModule],
  templateUrl: './contarasesoria.html',
  styleUrl: './contarasesoria.css'
})
export class Contarasesoria implements OnInit{
  displayedColumns: string[] = ['c1', 'c2'];
  dataSource: MatTableDataSource<ContarAsesoriaDTO> = new MatTableDataSource()
  @ViewChild(MatPaginator) paginator!: MatPaginator
  
  isLoggedIn: boolean = false;
  
  constructor(
    private aS: AsesoriaService,
  ){}
  ngOnInit(): void {
    this.aS.contarAsesoria().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }
  
}
