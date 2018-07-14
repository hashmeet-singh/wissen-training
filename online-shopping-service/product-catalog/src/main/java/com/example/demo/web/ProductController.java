package com.example.demo.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.exception.ProductNotFoundException;
import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;

@CrossOrigin(origins="*")
@RestController
@RequestMapping(value="/products")
public class ProductController {
	
	@Autowired
	
	private ProductRepository productRepository;
	
	
	@GetMapping(produces="application/json")
//	@RequestMapping(value="/products", method= RequestMethod.GET, produces="application/json")
	public @ResponseBody List<Product> getProducts() {
		List<Product> products = productRepository.findAll();
		return products;
	}
	
	@GetMapping(produces="application/json", value="/{id}")
//	@RequestMapping(value="/products/{id}", method= RequestMethod.GET, produces="application/json")
	public @ResponseBody Product getProductById(@PathVariable int id) {
		Product product = productRepository.findById(id);
		return product;
	}
	
	@GetMapping(produces="application/json", params= {"name"})
//	@RequestMapping(value="/products/name/{prodName}", method= RequestMethod.GET, produces="application/json")
	public @ResponseBody List<Product> getProductByName(@RequestParam String name) {
		List<Product> products = productRepository.findProduct(name);
		return products;
	}
	
	@ExceptionHandler(value= {ProductNotFoundException.class})
	public ResponseEntity<String> exceptionHandler(Throwable t){
		return new ResponseEntity<String>(t.getMessage(), null, HttpStatus.NOT_FOUND);
	}

}
