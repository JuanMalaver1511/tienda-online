import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  precioOriginal?: number;
  categoria: string;
  imagen: string;
  tallas: string[];
  etiqueta?: 'NUEVO' | 'SALE';
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Blazer Oversize Lino',
      precio: 189.00,
      categoria: 'Mujer',
      imagen: '1.jpg',
      tallas: ['XS', 'S', 'M', 'L', '+1'],
      etiqueta: 'NUEVO'
    },
    {
      id: 2,
      nombre: 'Pantalón Wide Leg',
      precio: 89.00,
      precioOriginal: 129.00,
      categoria: 'Mujer',
      imagen: 'assets/pantalon-blanco.jpg',
      tallas: ['XS', 'S', 'M', 'L'],
      etiqueta: 'SALE'
    },
    {
      id: 3,
      nombre: 'Sweater Cashmere',
      precio: 159.00,
      categoria: 'Unisex',
      imagen: 'assets/sweater-naranja.jpg',
      tallas: ['S', 'M', 'L', 'XL'],
      etiqueta: 'NUEVO'
    },
    {
      id: 4,
      nombre: 'Camiseta Essential',
      precio: 45.00,
      categoria: 'Unisex',
      imagen: 'assets/camiseta-blanca.jpg',
      tallas: ['XS', 'S', 'M', 'L', '+2']
    },
    {
      id: 5,
      nombre: 'Abrigo Lana',
      precio: 289.00,
      categoria: 'Mujer',
      imagen: 'assets/abrigo-beige.jpg',
      tallas: ['XS', 'S', 'M', 'L'],
      etiqueta: 'NUEVO'
    },
    {
      id: 6,
      nombre: 'Cargo Pants',
      precio: 95.00,
      precioOriginal: 135.00,
      categoria: 'Hombre',
      imagen: 'assets/cargo-beige.jpg',
      tallas: ['S', 'M', 'L', 'XL'],
      etiqueta: 'SALE'
    }
  ];

  productosFiltrados: Producto[] = [...this.productos];
  categoriaActual: string = 'todos';

  filtrarPorCategoria(categoria: string): void {
    this.categoriaActual = categoria;
    
    if (categoria === 'todos') {
      this.productosFiltrados = [...this.productos];
    } else {
      this.productosFiltrados = this.productos.filter(
        producto => producto.categoria.toLowerCase() === categoria.toLowerCase()
      );
    }
  }

  tieneDescuento(producto: Producto): boolean {
    return !!producto.precioOriginal;
  }

  calcularDescuento(producto: Producto): number {
    if (!producto.precioOriginal) return 0;
    return Math.round(((producto.precioOriginal - producto.precio) / producto.precioOriginal) * 100);
  }
}