package com.example.backend.inventory.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.inventory.model.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
}
