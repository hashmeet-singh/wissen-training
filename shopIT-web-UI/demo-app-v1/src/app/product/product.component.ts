import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import {CartServiceService} from '../cart-service.service'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[
    ProductServiceService
  ]
})
export class ProductComponent implements OnInit {
  currentTab = 1;
  reviews: any = [];
  @Input() product;
  @Input() idx;

  constructor(private productService: ProductServiceService, private cartService: CartServiceService) { }
  
  ngOnInit() {
    this.productService.loadReviews(this.product.id)
    .subscribe(reviews=>{
      this.reviews = reviews;
    })
  }

  isTabSelected(tab) {
    return this.currentTab === tab;
  }

  changeTab(event, tab) {
    console.log(event);
    this.currentTab = (this.currentTab == tab ? 0 : tab);
  }

  addReview(e) {
    this.productService.submitReview(this.product.id, e.value)
    .subscribe(review=>{
      this.reviews.push(review);
    })
  }

  addItem(e){
    this.cartService.addToCart({item:this.product, qty:1});
  }
}
