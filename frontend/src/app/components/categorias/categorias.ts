import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css',
})
export class Categorias {
  categorias = [
    { id: 1, nombre: 'Todos', valor: 'todos' },
    { id: 2, nombre: 'Mujer', valor: 'mujer' },
    { id: 3, nombre: 'Hombre', valor: 'hombre' },
    { id: 4, nombre: 'Accesorios', valor: 'accesorios' },
    { id: 5, nombre: 'Unisex', valor: 'unisex' }
  ];

  categoriaActiva: string = 'todos';

  seleccionarCategoria(categoria: string): void {
    this.categoriaActiva = categoria;
    console.log('Categoría seleccionada:', categoria);
    // Aquí puedes emitir un evento o llamar un servicio para filtrar productos
  }

  estaActiva(categoria: string): boolean {
    return this.categoriaActiva === categoria;
  }
}