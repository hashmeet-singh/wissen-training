package com.bank.mts.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "ACCOUNTS", schema = "my_bank")
public class Account {

	@Id
	private String num;
	@Column(name="name")
	private String holderName;
	private double balance;
	@Enumerated(EnumType.STRING)
	private AccountType type;
	
	@JsonIgnore
	@OneToMany(mappedBy="account", targetEntity=Txn.class)
	private List<Txn> txns;
	
	public List<Txn> getTxns() {
		return txns;
	}

	public void setTxns(List<Txn> txns) {
		this.txns = txns;
	}

	public String getNum() {
		return num;
	}

	public void setNum(String num) {
		this.num = num;
	}

	public String getHolderName() {
		return holderName;
	}

	public void setHolderName(String holderName) {
		this.holderName = holderName;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public AccountType getType() {
		return type;
	}

	public void setType(AccountType type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "Account [num=" + num + ", holderName=" + holderName + ", balance=" + balance + ", type=" + type + "]";
	}
	
	
	

}
