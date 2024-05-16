import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild('select1', { static: true }) select1ElementRef!: ElementRef;
  @ViewChild('select2', { static: true }) select2ElementRef!: ElementRef;
  @ViewChild('image', { static: true }) imagenElementRef!: ElementRef;


  ngAfterViewInit(): void {
    let nombres: string[] = ['../../../assets/img/pads/1.png', '../../../assets/img/pads/2.png'];
    this.select1ElementRef.nativeElement.classList.add('bg-[#ECE8DC]');
    this.select1ElementRef.nativeElement.addEventListener('click', () => {
      this.select1ElementRef.nativeElement.classList.add('bg-[#ECE8DC]');
      this.select2ElementRef.nativeElement.classList.remove('bg-[#ECE8DC]');
      this.imagenElementRef.nativeElement.src = nombres[0];
    });

    this.select2ElementRef.nativeElement.addEventListener('click', () => {
      this.select2ElementRef.nativeElement.classList.add('bg-[#ECE8DC]');
      this.select1ElementRef.nativeElement.classList.remove('bg-[#ECE8DC]');
      this.imagenElementRef.nativeElement.src = nombres[1];
    });
  }
}
