package com.example.demo;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.example.demo.model.Product;
import com.example.demo.model.Review;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.ReviewRepository;

@SpringBootApplication
@EnableTransactionManagement
public class ProductCatalogApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductCatalogApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner test(ProductRepository productRepository, ReviewRepository reviewRepository) {
		return args ->{
//			List<Product> products = productRepository.findProduct("on");
//			System.out.println(products.size());
			
//			Review review = new Review();
//			review.setAuthor("aaa@a.com");
//			review.setReview("Adfsadsf");
//			review.setStars(3);
			Product product = new Product();
			product.setId(1);
//			review.setProduct(product);
//			reviewRepository.addReview(review);
			List<Review> reviews = reviewRepository.findAll(1);
//			for(Review review: reviews)
//				System.out.println(review);
			System.out.println(reviews.size());
			
		};
		
	}
}
