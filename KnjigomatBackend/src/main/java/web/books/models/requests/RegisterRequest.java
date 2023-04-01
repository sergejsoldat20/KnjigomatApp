package web.books.models.requests;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import lombok.Data;

@Data
public class RegisterRequest {
    private String firstName;
    private String lastName;
    private String gender;
    private String email;
    private String username;
    private String password;
    private Boolean isDeleted = false;
    private String role = "USER";
    private Boolean accountConfirmed = true;
    private String phoneNumber;
}
