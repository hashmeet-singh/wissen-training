import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  apiUrl = 'http://localhost:8181/api';
  constructor(private http : HttpClient) { }

  loadAccounts(){
    return this.http.get(this.apiUrl+'/accounts');
  }

  handleTransaction(transaction){
    return this.http.post(this.apiUrl+'/transaction', transaction);
  }

  loadTransactions(accountNum){
    return this.http.get(this.apiUrl+`/summary?accountNum=${accountNum}`);
  }

}


