package com.example.oauthtest.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("user")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class UserItem {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String picture;
}
