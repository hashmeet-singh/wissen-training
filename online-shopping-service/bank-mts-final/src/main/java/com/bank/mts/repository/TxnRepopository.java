package com.bank.mts.repository;

import java.util.List;

import com.bank.mts.model.Txn;

public interface TxnRepopository {
	Txn save(Txn txn);

	List<Txn> findAll();
	
	List<Txn> fetchTxns(String accountNum);
}