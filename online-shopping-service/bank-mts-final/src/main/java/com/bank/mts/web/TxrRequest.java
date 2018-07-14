package com.bank.mts.web;

import javax.validation.constraints.NotBlank;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class TxrRequest {
	@NotBlank
	private String fromAccountNum;
	@NotBlank
	private String toAccountNum;
	private double amount;

	public String getFromAccountNum() {
		return fromAccountNum;
	}

	public void setFromAccountNum(String fromAccountNum) {
		this.fromAccountNum = fromAccountNum;
	}

	public String getToAccountNum() {
		return toAccountNum;
	}

	public void setToAccountNum(String toAccountNum) {
		this.toAccountNum = toAccountNum;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

}