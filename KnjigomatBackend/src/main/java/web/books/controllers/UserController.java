package web.books.controllers;


import jakarta.annotation.security.PermitAll;
import jakarta.persistence.PersistenceContext;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import web.books.models.dto.User;
import web.books.services.UserService;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/users")
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAll(){
       return userService.getAllUsers();
    }

    @GetMapping("/current-role")
    public String getCurrentRole() {
        return userService.getCurrentRole();
    }

    @GetMapping("/chat-users")
    public ResponseEntity<List<User>> getChatUsers() {
        List<User> result = userService.getUsersWithChat();
        if(result != null) {
            return ResponseEntity.ok(result);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
