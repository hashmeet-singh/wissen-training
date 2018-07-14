import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { ProductComponent } from './product/product.component'
import {HttpClientModule} from '@angular/common/http';
import { ProductFromComponent } from './product-from/product-from.component'
import {ReactiveFormsModule} from '@angular/forms'

const routes =[
  {path:'', component: HomeComponent},
  {path:'products', component: ProductComponent},
  {path:'products/add', component:ProductFromComponent},
  {path:'products/edit/:productId', component:ProductFromComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductFromComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
