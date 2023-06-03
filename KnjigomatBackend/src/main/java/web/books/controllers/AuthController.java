package web.books.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import web.books.exceptions.NotFoundException;
import web.books.mail.EmailService;
import web.books.models.dto.AuthResponse;
import web.books.models.dto.ConfirmEmail;
import web.books.models.dto.User;
import web.books.models.entities.UserEntity;
import web.books.models.requests.ChangePasswordRequest;
import web.books.models.requests.LoginRequest;
import web.books.models.requests.RegisterRequest;
import web.books.repositories.UserEntityRepository;
import web.books.security.JwtGenerator;
import web.books.services.UserService;

import java.util.Random;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final JwtGenerator jwtGenerator;
    private final ModelMapper modelMapper;
    private final EmailService emailService;
    private final UserEntityRepository repository;
    private String email = "";
    private String pin = "";
    private String username ="";

    public AuthController(AuthenticationManager authenticationManager,
                          UserService userService,
                          PasswordEncoder passwordEncoder,
                          JwtGenerator jwtGenerator,
                          ModelMapper modelMapper, EmailService emailService, UserEntityRepository repository) {
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.jwtGenerator = jwtGenerator;
        this.modelMapper = modelMapper;
        this.emailService = emailService;
        this.repository = repository;
    }

    @PostMapping("/change-password")
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
        email=request.getEmail();
        username= request.getUsername();
        request.setAccountConfirmed(false);
        request.setPassword(passwordEncoder.encode(request.getPassword()));
        request.setDeleted(false);
        userService.insert(request, UserEntity.class);
        pin = String.format("%06d", new Random().nextInt(1000000));
        emailService.sendEmail(request.getEmail(), "Knjigomat - confirm email", "Vas kod za aktivaciju naloga je: " + pin);
        return new ResponseEntity<>("User registered success!", HttpStatus.OK);
    }

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
    @GetMapping("/send-pin/{username}")
    public void sendPin(@PathVariable String username){
        User user = userService.getUserByUsername(username);
        this.username = user.getUsername();
        email = user.getEmail();
        pin = String.format("%06d", new Random().nextInt(1000000));
        emailService.sendEmail(email, "Knjigomat - confirm email", "Vas kod za aktivaciju naloga je: " + pin);
    }
    @PostMapping("/confirm-pin")
    public Boolean  confirmPin(@RequestBody ConfirmEmail request)  throws NotFoundException {
        if (!request.getPin().equals(pin))
            return false;
        User user = userService.getUserByUsername(this.username);
        user.setAccountConfirmed(true);
        userService.update(user.getId(), user, User.class);
        return true;
    }
    @GetMapping("/email-confirmed/{username}")
    public Boolean getEmailConfirmed(@PathVariable String username){
        return userService.getEmailConfirmed(username);
    }
}