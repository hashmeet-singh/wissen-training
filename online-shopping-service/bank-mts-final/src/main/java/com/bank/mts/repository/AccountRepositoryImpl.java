package com.bank.mts.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.bank.mts.model.Account;

public class AccountRepositoryImpl implements AccountRepository {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public Account load(String num) {
		return entityManager.find(Account.class, num);
	}

	@Override
	public Account update(Account account) {
		return entityManager.merge(account);
	}

	@Override
	public List<Account> loadAll() {
		Query query = entityManager.createQuery("from Account");
		return query.getResultList();
	}

	
}
