import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-portada',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portada.html',
  styleUrls: ['./portada.css']
})
export class Portada implements OnInit, OnDestroy {

  images: string[] = [
    '2.jpg',
    '1.jpg',
    '1.jpg'
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.next();
    }, 5000); // cambia cada 5 segundos
  }

  next(): void {
    this.currentIndex =
      (this.currentIndex + 1) % this.images.length;
  }

  prev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goTo(index: number): void {
    this.currentIndex = index;
  }
}
