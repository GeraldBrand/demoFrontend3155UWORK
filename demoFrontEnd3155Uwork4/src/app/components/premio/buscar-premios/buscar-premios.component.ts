import { Component } from '@angular/core';
import { PremioServices } from '../../../services/premio.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscar-premios',
  imports: [CommonModule, FormsModule],
  templateUrl: './buscar-premios.component.html',
})
export class BuscarPremiosComponent {
  keyword = '';
  resultados: any[] = [];
  busquedaRealizada = false; // ✅ nuevo flag

  constructor(private premioService: PremioServices) {}

  buscar() {
    const palabraClave = this.keyword.trim();
    if (palabraClave) {
      this.premioService.buscarPorNombre(palabraClave).subscribe(
        (data) => {
          this.resultados = data;
          this.busquedaRealizada = true; // ✅ activamos el estado
        },
        (error) => {
          console.error('Error al buscar premios', error);
          this.resultados = [];
          this.busquedaRealizada = true;
        }
      );
    } else {
      this.resultados = [];
      this.busquedaRealizada = false;
    }
  }

  limpiar() {
    this.keyword = '';
    this.resultados = [];
    this.busquedaRealizada = false;
  }
}
