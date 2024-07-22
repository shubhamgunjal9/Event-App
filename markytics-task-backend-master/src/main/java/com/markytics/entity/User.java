package com.markytics.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer userId;

    @NotNull
    @Column(unique = true)
    private String userName;

    @NotNull
    private String password;

    @NotNull
    private String email;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("user")
    private List<Events> events;

    public User() {
        super();
    }
    public User(Integer userId) {
        this.userId = userId;
    }

    public User(Integer userId, String userName, String password, String email, List<Events> events) {
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.events = events;
    }
}
