package com.example.oauthtest.controller;

import com.example.oauthtest.model.UserItem;
import com.example.oauthtest.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserRepository userRepository;

    @GetMapping("")
    public List<UserItem> fetchAllUser() {
        return userRepository.findAll();
    }

    @CrossOrigin
    @PostMapping("")
    public UserItem saveUser(@RequestBody UserItem user) {
        // Check if exist
        Example<UserItem> userItemExample = Example.of(user);
        if (userRepository.exists(userItemExample)) {
            return user;
        }
        UserItem userItem = UserItem
                .builder()
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .picture(user.getPicture())
                .email(user.getEmail())
                .build();

        return userRepository.save(userItem);
    }
}
