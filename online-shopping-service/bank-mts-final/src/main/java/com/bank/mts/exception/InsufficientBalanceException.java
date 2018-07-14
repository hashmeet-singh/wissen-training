package com.bank.mts.exception;

public class InsufficientBalanceException extends RuntimeException{
	public InsufficientBalanceException(String message) {
		super(message);
	}
}
