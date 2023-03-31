package web.books.controllers;


import jakarta.annotation.security.PermitAll;
import jakarta.persistence.PersistenceContext;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import web.books.base.CrudController;
import web.books.models.dto.User;
import web.books.models.dto.UserResponse;
import web.books.models.requests.UserRequest;
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
    @GetMapping("/{id}")
    public User getUserById(@PathVariable Integer id){
        return userService.getUserById(id);
    }
    @GetMapping("/current-role")
    public String getCurrentRole() {
        return userService.getCurrentRole();
    }
    @GetMapping("/current-user")
    public ResponseEntity<UserResponse> getCurrentUser() {
        UserResponse currentUser = userService.getCurrentUser();
        return new ResponseEntity<>(currentUser, HttpStatus.OK);
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
