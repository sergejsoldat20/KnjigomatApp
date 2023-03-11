package web.books.controllers;

import jakarta.annotation.security.PermitAll;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.aspectj.weaver.ast.Not;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import web.books.exceptions.NotFoundException;
import web.books.models.dto.Comment;
import web.books.models.dto.UserResponse;
import web.books.models.entities.CommentEntity;
import web.books.models.requests.CommentRequest;
import web.books.security.SecurityConsts;
import web.books.services.CommentService;
import web.books.services.UserService;

import java.sql.Timestamp;
import java.util.List;

@RestController
@RequestMapping("/comments")
public class CommentController {
    private final CommentService service;
    private final UserService userService;
    public CommentController(CommentService service,UserService userService){
        this.service = service;
        this.userService = userService;
    }
    @GetMapping("/posts/{id}")
    @PermitAll
    public List<Comment> getAllByPostId(@PathVariable Integer id) {
        return service.getAllByPostId(id);
    }
    @PostMapping("/posts/{id}")
    @PreAuthorize("hasRole(SecurityContst.USER) || hasRole(SecurityContst.ADMIN)")
    public Comment insert(@PathVariable Integer id, @RequestBody CommentRequest commentRequest) throws NotFoundException{
        commentRequest.setCreatedTime(new Timestamp(System.currentTimeMillis()));
        commentRequest.setPostId(id);
        commentRequest.setUserId(userService.getCurrentId());
        return service.insert(commentRequest, Comment.class);
    }
    @DeleteMapping("{id}")
    @PreAuthorize("hasRole(SecurityContst.USER) || hasRole(SecurityContst.ADMIN)")
    public void delete(@PathVariable Integer id) throws NotFoundException {
        service.delete(id);
    }
}
