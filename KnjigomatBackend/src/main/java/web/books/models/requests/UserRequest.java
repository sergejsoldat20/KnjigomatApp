package web.books.models.requests;

import lombok.Data;
@Data
public class UserRequest {
    private String firstName;
    private String lastName;
    private String gender;
    private String email;
    private String username;
    private String password;
    private String role="USER";
    private Boolean accountConfirmed = true;
    private String phoneNumber;
}
