package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;

import com.bank.mts.config.Bank_infra;
import com.bank.mts.config.Bank_mts;
import com.bank.mts.model.Account;
import com.bank.mts.repository.AccountRepository;
import com.bank.mts.repository.TxnRepopository;
import com.bank.mts.service.TxrService;

@Import(value = { Bank_mts.class })
@SpringBootApplication
public class BankMtsFinalApplication {

	public static void main(String[] args) {
		SpringApplication.run(BankMtsFinalApplication.class, args);
	}
	
//	@Bean
//	public CommandLineRunner test(AccountRepository accountRepository, TxrService txrService) {
//		return args ->{
////			Account account = accountRepository.load("1");
////			System.out.println(account);
//			
//			txrService.txr(1000, "2", "1");
//		};
//	}
}
