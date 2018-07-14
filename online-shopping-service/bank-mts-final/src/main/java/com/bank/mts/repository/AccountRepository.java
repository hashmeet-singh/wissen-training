package com.bank.mts.repository;

import java.util.List;

import com.bank.mts.model.Account;

public interface AccountRepository {

	Account load(String num);

	Account update(Account account);
	
	List<Account> loadAll();

}
