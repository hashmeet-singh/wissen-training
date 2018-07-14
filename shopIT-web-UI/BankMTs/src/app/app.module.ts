import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TransactionComponent } from './transaction/transaction.component';
import {RouterModule, Route} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import {TableModule} from 'primeng/table';

const routes=[
  {path:'', component:HomeComponent},
  {path:'transaction', component:TransactionComponent},
  {path:'summary', component:AccountSummaryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TransactionComponent,
    AccountSummaryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
