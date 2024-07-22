package com.markytics.service;

import com.markytics.entity.User;
import com.markytics.dto.LoginRequest;
import com.markytics.dto.LoginResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

    public User save(User user);

    public List<User> getAllUsers();

    public User getUserById(Integer userId);

    public void deleteUserById(Integer userId);

    public User updateUser(User user);

    public LoginResponse loginUser(LoginRequest loginRequest);



}
