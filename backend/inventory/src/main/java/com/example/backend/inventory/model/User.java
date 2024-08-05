package com.example.backend.inventory.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column
    private String role;

    // Getter and setter for 'id'
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // Getter and setter for 'username'
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    // Getter and setter for 'password'
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // Getter and setter for 'role'
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
