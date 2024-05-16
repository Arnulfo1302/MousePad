import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../services/carrito.service';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.css'
})
export class ItemFormComponent implements OnInit {
  id: number = 0;

  constructor(private route: ActivatedRoute, private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
  }

  addToCart() {
    this.carritoService.addToCart(this.id.toString(), this.howMany);
    console.log('Artículo agregado al carrito:', this.id, 'Cantidad:', this.howMany);
  }
// Seleccion de tamaño
selectedSize: string = 'l';
onSelectedSize() {
  console.log(this.selectedSize);
}
// Cantidad a comprar
howMany: number = 1;

onCantidadSeleccionada() {
  console.log(this.howMany); // debug
}
increase() {
  this.howMany++;
  this.onCantidadSeleccionada();
}
decrease() {
  if (this.howMany > 1) {
    this.howMany--;
    this.onCantidadSeleccionada();
  }
}
}
