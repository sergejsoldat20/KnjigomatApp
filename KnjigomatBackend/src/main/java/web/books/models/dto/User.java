package web.books.models.dto;


import lombok.Data;
@Data
public class User {
    private Integer id;
    private String firstName;
    private String lastName;
    private String gender;
    private String email;
    private String username;
    private String password;
    private Boolean isDeleted;
    private String role;
    private Boolean accountConfirmed = true;
    private String phoneNumber;
}
