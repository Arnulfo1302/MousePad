import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  items: { id: string, cantidad: number }[] = [];
  cartCountUpdated = new Subject<number>();

  constructor() {}

  addToCart(id: string, cantidad: number) {
    this.items.push({ id, cantidad });
    this.cartCountUpdated.next(this.items.length);
    console.log(this.getCart().length)
  }

  hideCpmponent(){

  }

  getCart() {
    return this.items;
  }

  cleanCart() {
    this.items = [];
  }
}
