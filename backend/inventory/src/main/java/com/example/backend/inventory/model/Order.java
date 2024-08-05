package com.example.backend.inventory.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String orderNumber;

    @Column(nullable = false)
    private LocalDateTime orderDate;

    @Column(nullable = false)
    private String status;

    // Getter and setter for 'id'
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // Getter and setter for 'orderNumber'
    public String getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
    }

    // Getter and setter for 'orderDate'
    public LocalDateTime getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDateTime orderDate) {
        this.orderDate = orderDate;
    }

    // Getter and setter for 'status'
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
