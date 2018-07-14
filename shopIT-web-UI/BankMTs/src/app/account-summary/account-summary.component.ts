import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {

  transactions: any;
  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
  }

  getTransactions(e){
    this.transactionService.loadTransactions(1)
    .subscribe(transactions=>{
      this.transactions = transactions;
    })
  }

}
