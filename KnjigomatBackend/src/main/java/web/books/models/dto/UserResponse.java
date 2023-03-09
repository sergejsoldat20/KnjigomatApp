package web.books.models.dto;

import lombok.Data;

@Data
public class UserResponse {
    private String firstName;
    private String lastName;
    private String gender;
    private String email;
    private String username;
    private String password;
    private String role;
    private Boolean accountConfirmed;
    private String phoneNumber;
}
