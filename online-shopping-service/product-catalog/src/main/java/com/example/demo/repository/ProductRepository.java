package com.example.demo.repository;

import java.util.List;

import com.example.demo.model.Product;

public interface ProductRepository {
	List<Product> findAll();
	void insertProduct(Product product);
	Product findById(int id);
	List<Product> findProduct(String productName);
//	<T> List<Product> findProductByProp(T property);
}