import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  loadProducts(){
    console.log("in loadProducts()")
    let url= 'http://localhost:8181/products'
    return this.http.get(url);
  }

  loadReviews(productId){
    let url = `http://localhost:8181/products/${productId}/reviews`
    return this.http.get(url);
  }

  submitReview(productId, review){
    let url = `http://localhost:8181/products/${productId}/reviews`;
    return this.http.post(url, review);
  }
}


