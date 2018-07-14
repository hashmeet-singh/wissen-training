import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  showStatus: boolean= false;
  status:String;
  accounts: any;
  transactionForm: FormGroup;
  constructor(private fb: FormBuilder, private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionForm = this.fb.group({
      fromAccountNum: ['',Validators.required],
      toAccountNum : ['',Validators.required],
      amount: ['',Validators.required]
    });

    this.transactionService.loadAccounts()
    .subscribe(accounts=>{
      this.accounts = accounts;
    })

  }

  handleSubmit(e){
    
    if(this.transactionForm.valid){
      console.log(this.transactionForm.value)
      this.transactionService.handleTransaction(this.transactionForm.value)
      .subscribe(response=>{
        console.log(response);
        if(response['status']==='SUCCESS'){
          this.showStatus= true;
          this.status=response['message'];
        }
        if(response['status']==='FAILURE'){
          this.showStatus= true;
          this.status=response['message'];
        }
      });
    }
  }
  

}
