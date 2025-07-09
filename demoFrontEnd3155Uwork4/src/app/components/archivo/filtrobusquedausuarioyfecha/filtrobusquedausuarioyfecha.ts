import { Component } from '@angular/core';
import { ArchivoService } from '../../../services/archivo.service';
import { UsuarioService } from '../../../services/usuario.service';
import { Archivo } from '../../../models/Archivo';
import { Usuario } from '../../../models/Usuario';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-filtrobusquedausuarioyfecha',
  imports: [
     CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './filtrobusquedausuarioyfecha.html',
    providers:[provideNativeDateAdapter()],
  styleUrl: './filtrobusquedausuarioyfecha.css'
})
export class Filtrobusquedausuarioyfecha {
  idUsuario: number = 0;
  fechaSeleccionada: Date = new Date();
  archivos: Archivo[] = [];
  usuarios: Usuario[] = [];
  buscado: boolean = false;

  constructor(
    private archivoService: ArchivoService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.usuarioService.list().subscribe((data) => {
      this.usuarios = data;
    });
  }

  buscar(): void {
    if (!this.idUsuario || !this.fechaSeleccionada) return;

    const fechaISO = this.fechaSeleccionada.toISOString().split('T')[0];

    this.archivoService.buscarPorUsuarioYFecha(this.idUsuario, fechaISO).subscribe({
      next: (data) => {
        this.archivos = data;
        this.buscado = true;
      },
      error: (err) => {
        console.error(err);
        this.archivos = [];
        this.buscado = true;
      }
    });
  }
}
