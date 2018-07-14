import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[
    ProductServiceService
  ]
})
export class ProductListComponent implements OnInit {

  products: any = [];

  constructor(private productService: ProductServiceService){}

  ngOnInit(){
    this.productService.loadProducts()
    .subscribe(products=>{
      console.log(products);
      this.products=products;
    })
  }
}
