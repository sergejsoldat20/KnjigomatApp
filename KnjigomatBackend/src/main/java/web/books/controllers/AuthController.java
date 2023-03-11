package web.books.controllers;

import jakarta.annotation.security.PermitAll;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import web.books.exceptions.NotFoundException;
import web.books.models.dto.AuthResponse;
import web.books.models.dto.User;
import web.books.models.entities.UserEntity;
import web.books.models.requests.ChangePasswordRequest;
import web.books.models.requests.LoginRequest;
import web.books.models.requests.RegisterRequest;
import web.books.repositories.UserEntityRepository;
import web.books.security.JwtGenerator;
import web.books.services.UserService;

import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/auth")
public class AuthController {

    private AuthenticationManager authenticationManager;
    private UserService userService;
    private PasswordEncoder passwordEncoder;
    private JwtGenerator jwtGenerator;
    private ModelMapper modelMapper;

    private UserEntityRepository repository;


    public AuthController(AuthenticationManager authenticationManager,
                          UserService userService,
                          PasswordEncoder passwordEncoder,
                          JwtGenerator jwtGenerator,
                          ModelMapper modelMapper, UserEntityRepository repository) {
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.jwtGenerator = jwtGenerator;
        this.modelMapper = modelMapper;
        this.repository = repository;
    }

    @PostMapping("/change-password")
    @PreAuthorize("hasRole(SecurityContst.USER) || hasRole(SecurityContst.ADMIN)")
    public ResponseEntity<String> changePassword(@RequestBody ChangePasswordRequest request) throws NotFoundException {
        User user = modelMapper.map(repository.findByUsername(request.getUsername()), User.class);
        String currentPassword = request.getOldPassword();
        String newPassword = request.getNewPassword();

        if(!passwordEncoder.matches(currentPassword, user.getPassword())){
            return new ResponseEntity<>("Current password is incorrect", HttpStatus.NOT_FOUND);
        }

        user.setPassword(passwordEncoder.encode(newPassword));
        userService.update(user.getId(), user, User.class);
        return new ResponseEntity<>("Current password changed", HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) throws NotFoundException {
        if(repository.existsByUsername(request.getUsername())) {
            return new ResponseEntity<>("Username is taken!", HttpStatus.BAD_REQUEST);
        }

        request.setPassword(passwordEncoder.encode(request.getPassword()));
        userService.insert(request, UserEntity.class);
        return new ResponseEntity<>("User registered success!", HttpStatus.OK);
    }

    // @PreAuthorize("permitAll()")
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request){
        System.out.println(request.getUsername());
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtGenerator.generateToken(authentication);
        System.out.println(token);
        return new ResponseEntity<>(new AuthResponse(token), HttpStatus.OK);
    }
}