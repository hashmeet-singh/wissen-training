package com.bank.mts.web;

import com.bank.mts.model.Txn;

public class TxrResponse {
	private Txn txn;
	private TxrStatus status;
	private String message;

	public TxrResponse(Txn txn, TxrStatus status, String message) {
		super();
		this.txn = txn;
		this.status = status;
		this.message = message;
	}

	public Txn getTxn() {
		return txn;
	}

	public void setTxn(Txn txn) {
		this.txn = txn;
	}

	public TxrStatus getStatus() {
		return status;
	}

	public void setStatus(TxrStatus status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
