package com.bank.mts.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bank.mts.model.Txn;
import com.bank.mts.repository.TxnRepopository;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(value = "/api/summary")
public class AccountSummary {
	
	@Autowired
	private TxnRepopository txnRepository;
	
	@GetMapping(params= {"accountNum"})
	public List<Txn> fetchTxns(@RequestParam String accountNum){
		return txnRepository.fetchTxns(accountNum);
	}

}
