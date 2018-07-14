package com.example.demo.repository;

import static org.hamcrest.CoreMatchers.instanceOf;
import static org.hamcrest.CoreMatchers.nullValue;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.hamcrest.core.IsInstanceOf;
import org.springframework.stereotype.Repository;

import com.example.demo.exception.ProductNotFoundException;
import com.example.demo.model.Product;

@Repository(value="productRepository")
public class ProductRepositoryImpl implements ProductRepository {

	
	@PersistenceContext
	private EntityManager entityManager; 
	
	@Override
	public List<Product> findAll() {
		
		return entityManager.createQuery("from Product").getResultList();
	}

	@Override
	public void insertProduct(Product product) {
		entityManager.persist(product);
	}

	@Override
	public List<Product> findProduct(String productName) {
		Query query = entityManager.createQuery( "from Product p where p.name like :prodName");
		query.setParameter("prodName", "%"+ productName + "%");
		return query.getResultList();
		
	}

	@Override
	public Product findById(int id) {
		Product product = entityManager.find(Product.class, id);
		if(product==null)
			throw new ProductNotFoundException("Product not found!");
		return product;
	}

	// @Override
	// public <T> List<Product> findProductByProp(T property) {
	// if(property instanceof Integer) {
	// List<Product> products = new ArrayList<>();
	// products.add(entityManager.find(Product.class, property));
	// return products;
	// }
	// if(property instanceof String) {
	// Query query = entityManager.createQuery( "from Product p where p.name like
	// :prodName");
	// query.setParameter("prodName", "%"+ property + "%");
	// return query.getResultList();
	// }
	// return null;
	// }

}
