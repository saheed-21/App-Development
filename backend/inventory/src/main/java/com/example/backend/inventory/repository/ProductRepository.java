package com.example.backend.inventory.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.inventory.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}
