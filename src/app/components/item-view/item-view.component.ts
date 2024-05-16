import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarouselComponent } from '../carousel/carousel.component';
import { SharedItemComponent } from '../item/shared-item/shared-item.component';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../services/carrito.service';
import { ItemFormComponent } from '../item-form/item-form.component';

@Component({
  selector: 'app-item-view',
  standalone: true,
  imports: [CarouselComponent,SharedItemComponent,FormsModule,ItemFormComponent],
  templateUrl: './item-view.component.html',
  styleUrl: './item-view.component.css',
})
export class ItemViewComponent {
  constructor(private route: ActivatedRoute) {}
  // conseguir el ID
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
    });
  }
  // Texto informacion
  printedText: string = 'This is product info This is product info This is product info This is product info This is product info This is product info This is product info This is product info This is product info This is product info';

  mostrarTexto(texto: string): void {
    
    switch (texto) {
      case 'Product Info':
        this.printedText =
          'This is product info This is product info This is product info This is product info This is product info This is product info This is product info This is product info This is product info This is product info';
        break;
      case 'Shipping Info':
        this.printedText =
          'This is shipping info This is shipping info This is shipping info This is shipping info This is shipping info This is shipping info This is shipping info This is shipping info This is shipping info This is shipping info';
        break;
      case 'Size Guide':
        this.printedText =
          'This is size guide This is size guide This is size guide This is size guide This is size guide This is size guide This is size guide This is size guide This is size guide This is size guide This is size guide This is size guide';
        break;
      default:
        this.printedText = '';
        break;
    }
  }
  
}
