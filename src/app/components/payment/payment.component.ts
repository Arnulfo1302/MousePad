import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartViewComponent } from '../cart-view/cart-view.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule, CartViewComponent, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  opciones = [
    { valor: 'opcion1', etiqueta: 'Credit card' },
    { valor: 'opcion2', etiqueta: 'Opción 2' },
    { valor: 'opcion3', etiqueta: 'Opción 3' }
  ];

  seleccionado: string | undefined;
}
