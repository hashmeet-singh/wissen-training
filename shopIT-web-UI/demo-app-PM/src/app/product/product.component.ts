import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.loadProducts()
      .subscribe(products => {
        this.products = products;
      })
  }

  delete(id) {
    this.productService.deleteProduct(id)
      .subscribe(resp => {
        this.products = this.products.filter(item => item.id !== id)
      })
  }
}
