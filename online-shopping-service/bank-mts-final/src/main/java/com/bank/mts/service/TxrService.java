package com.bank.mts.service;

import com.bank.mts.model.Txn;
import com.bank.mts.repository.AccountRepository;
import com.bank.mts.repository.TxnRepopository;

public interface TxrService {
	public void setAccountRepository(AccountRepository accountRepository);
	public void setTxnRepopository(TxnRepopository txnRepopository);
	Txn txr(double amount, String fromAccNum, String toAccNum);
}
