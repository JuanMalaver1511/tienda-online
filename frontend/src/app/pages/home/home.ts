import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Portada } from '../../components/portada/portada';

@Component({
  selector: 'app-home',
  imports: [Navbar, Portada],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
