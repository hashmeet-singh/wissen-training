import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) { }

  loadProducts(){
    return this.http.get(this.url);
  }
  loadProduct(productId){
    return this.http.get(this.url+`/${productId}`);
  }

  addProduct(product){
    return this.http.post(this.url,product);
  }
  update(product){
    return this.http.put(this.url+`/${product.id}`,product);
  }

  deleteProduct(productId){
    return this.http.delete(this.url+`/${productId}`);
  }
}
