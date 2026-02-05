import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categorias } from '../categorias/categorias';
import { Products } from '../products/products';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule, Categorias, Products],
  template: `
    <div class="tienda-container">
      <app-categorias 
        (categoriaSeleccionada)="onCategoriaSeleccionada($event)">
      </app-categorias>
      
      <app-products #productosRef></app-products>
    </div>
  `,
  styles: [`
    .tienda-container {
      min-height: 100vh;
      background: #ffffffff;
    }
  `]
})
export class Tienda {
  @ViewChild('productosRef') productosComponent!: Products;

  onCategoriaSeleccionada(categoria: string): void {
    console.log('Categoría recibida en componente padre:', categoria);
    // Llamar al método de filtrado del componente de productos
    this.productosComponent.filtrarPorCategoria(categoria);
  }
}