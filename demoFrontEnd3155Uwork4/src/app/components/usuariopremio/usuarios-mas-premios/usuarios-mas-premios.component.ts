import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuariopremioService } from '../../../services/usuariopremio.service';

@Component({
  selector: 'app-usuarios-mas-premios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios-mas-premios.component.html'
})
export class UsuariosMasPremiosComponent {
  cantidad: number = 1;
  usuarios: any[] = [];
  error: string = '';

  constructor(private UsuariopremioService: UsuariopremioService) {}

  buscar() {
    if (this.cantidad > 0) {
      this.UsuariopremioService.listarUsuariosConMasDeNPremios(this.cantidad).subscribe({
        next: (data) => {
          this.usuarios = data;
          this.error = '';
        },
        error: (err) => {
          this.usuarios = [];
          this.error = 'Error al obtener los usuarios.';
          console.error(err);
        }
      });
    }
  }
}
