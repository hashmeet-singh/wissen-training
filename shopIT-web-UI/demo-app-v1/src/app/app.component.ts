import { Component } from '@angular/core';
import {ProductServiceService} from './product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
    ProductServiceService
  ]
})
export class AppComponent {
  title = 'ShopIT';
  isCartOpen=false;

  toggleCart(){
    this.isCartOpen = !this.isCartOpen;
  }
}
