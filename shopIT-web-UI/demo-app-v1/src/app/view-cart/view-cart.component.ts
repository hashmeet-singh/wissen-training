import { Component, OnInit, Input } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

 
  itemsLine: Array<any> = [];
  totalAmount:number = 0;

  constructor(private cartService : CartServiceService) { }

  ngOnInit(){

  }

  ngDoCheck(){
    let cart = this.cartService.getCart();
    let keys= Object.keys(cart);
    this.itemsLine = [];
    keys.forEach(key=>{
      let line = cart[key];
      this.itemsLine.push(line);
      this.totalAmount += line.item.price * line.qty;
    });
  }

}
