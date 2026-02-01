import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Portada } from '../../components/portada/portada';
import { Products } from '../../components/products/products';
import { Categorias } from "../../components/categorias/categorias";

@Component({
  selector: 'app-home',
  imports: [Navbar, Portada, Products, Categorias],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
