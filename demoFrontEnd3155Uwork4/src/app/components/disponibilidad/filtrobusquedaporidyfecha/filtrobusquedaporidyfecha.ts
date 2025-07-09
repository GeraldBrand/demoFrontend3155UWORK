import { Component } from '@angular/core';
import { DisponibilidadService } from '../../../services/disponibilidad.service';
import { Disponibilidad } from '../../../models/Disponibilidad';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../models/Usuario';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-filtrobusquedaporidyfecha',
  imports: [MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  templateUrl: './filtrobusquedaporidyfecha.html',
  providers:[provideNativeDateAdapter()],
  styleUrl: './filtrobusquedaporidyfecha.css'
})
export class Filtrobusquedaporidyfecha {

  idUsuario: number = 0;
  fechaSeleccionada: Date = new Date();
  disponibilidades: Disponibilidad[] = [];
  listaUsuarios: Usuario[] = [];
  buscado: boolean = false;

  constructor(
    private disponibilidadService: DisponibilidadService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.usuarioService.list().subscribe({
      next: (data) => {
        this.listaUsuarios = data;
      },
      error: (e) => {
        console.error('Error al cargar usuarios', e);
      }
    });
  }

  buscar(): void {
    if (!this.idUsuario || !this.fechaSeleccionada) {
      return;
    }

    const fechaISO = this.fechaSeleccionada.toISOString().split('T')[0]; // yyyy-MM-dd

    this.disponibilidadService.buscarPorUsuarioYFecha(this.idUsuario, fechaISO).subscribe({
      next: (data) => {
        this.disponibilidades = data;
        this.buscado = true;
      },
      error: (err) => {
        console.error(err);
        this.disponibilidades = [];
        this.buscado = true;
      }
    });
  }
}
