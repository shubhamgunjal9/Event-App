package com.markytics.service;

import com.markytics.entity.User;
import com.markytics.dto.LoginRequest;
import com.markytics.dto.LoginResponse;
import com.markytics.repository.UserRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Integer userId) {
        return userRepository.findById(userId).get();
    }

    @Override
    public void deleteUserById(Integer userId) {
        userRepository.deleteById(userId);
    }

    @Override
    public User updateUser(User user) {
        return null;
    }

    @Override
    public LoginResponse loginUser(LoginRequest loginRequest) {
        LoginResponse loginResponse = new LoginResponse();
        User user = userRepository.findByUserNameAndPassword(loginRequest.getUserName(),loginRequest.getPassword());
        if(user != null) {
            loginResponse.setLoginStatus(true);
            loginResponse.setUserId(user.getUserId());
        } else {
            loginResponse.setLoginStatus(false);
        }
        return loginResponse;
    }
}
