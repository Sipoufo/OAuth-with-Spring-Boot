package com.example.oauthtest;

import com.example.oauthtest.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OauthtestApplication {

	public static void main(String[] args) {
		SpringApplication.run(OauthtestApplication.class, args);
	}
}
