import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tienda } from './components/tienda/tienda';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tienda],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tienda');
}
