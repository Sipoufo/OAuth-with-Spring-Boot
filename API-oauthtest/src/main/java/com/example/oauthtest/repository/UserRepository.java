package com.example.oauthtest.repository;

import com.example.oauthtest.model.UserItem;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<UserItem, String> {
    public UserItem findByFirstName(String firstName);
}
