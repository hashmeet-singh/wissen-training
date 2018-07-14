package com.bank.mts.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.mts.model.Account;
import com.bank.mts.repository.AccountRepository;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(value="/api/accounts")
public class AccountController {
	
	@Autowired
	private AccountRepository accountRepo;
	
	@GetMapping
	public List<Account> getAccounts(){
		return accountRepo.loadAll(); 
	}

}
