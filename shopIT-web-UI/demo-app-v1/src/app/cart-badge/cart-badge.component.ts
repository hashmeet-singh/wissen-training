import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.css']
})
export class CartBadgeComponent implements OnInit {

  itemsCount: number=0;

  constructor(private cartService: CartServiceService) { }
  
  ngOnInit() {
    this.cartService.getCartStream()
    .subscribe(e=>{
      this.itemsCount += e.value;
    })
  }

}
