import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @ViewChild('cartCountView', { static: true })
  cartCountViewElementRef!: ElementRef;
  @ViewChild('cartCount', { static: true }) cartCountElementRef!: ElementRef;
  cartItemCount: number = 0;

  constructor(
    private route: ActivatedRoute,
    private carritoService: CarritoService
  ) {
    this.carritoService.cartCountUpdated.subscribe((count) => {
      if (
        this.cartCountViewElementRef &&
        this.cartCountViewElementRef.nativeElement
      )// si existen los elementos
      {
        if (count > 0) {
          this.cartItemCount = count;
          this.cartCountViewElementRef.nativeElement.classList.add('flex');
          this.cartCountViewElementRef.nativeElement.classList.remove('hidden');
        } else {
          this.cartCountViewElementRef.nativeElement.classList.add('hidden');
          this.cartCountViewElementRef.nativeElement.classList.remove('flex');
        }
      }
    });
  }
}
