import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductServiceService } from './product-service.service';
import {CartServiceService} from './cart-service.service';
import {RouterModule, Route} from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { HomeComponent } from './home/home.component'

const routes=[
  {path:'', component:HomeComponent},
  {path:'cart', component:ViewCartComponent},
  {path:'products', component:ProductListComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ReviewComponent,
    ReviewFormComponent,
    ViewCartComponent,
    ProductListComponent,
    CartBadgeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProductServiceService,
    CartServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
