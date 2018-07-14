import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cart: any = {};
  cartStream: Subject<any> = new Subject();

  constructor() {}

  addToCart(e) {
    let item = e.item;
    let qty = e.qty;
    let id = item.id;
    let line = this.cart[id];
    if (line) {
      qty = line.qty + 1;
      line = Object.assign({}, line, { qty });
    } else {
      line = Object.assign({ item, qty });
      this.cartStream.next({value:1});
    }
    this.cart = Object.assign({}, this.cart, { [id]: line })
    console.log(this.cart)

  }

  getCartStream(){
    return this.cartStream;
  }

  getCart(){
    return this.cart;
  }
}
