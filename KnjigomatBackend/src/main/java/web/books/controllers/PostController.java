package web.books.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import web.books.exceptions.NotFoundException;
import web.books.models.dto.Post;
import web.books.models.dto.SinglePost;
import web.books.models.requests.PostRequest;
import web.books.services.PostService;
import web.books.services.UserService;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private final PostService service;
    @Autowired
    private final UserService userService;

    public PostController(PostService servise, UserService userService) {
        this.service = servise;
        this.userService = userService;
    }

    @GetMapping
    public List<Post> findAll() throws NotFoundException {
        return service.findAll(Post.class);
    }

    @GetMapping("/paginated")
    public Page<Post> findAllPaginated(Pageable page) {
        return service.findAll(page, Post.class);
    }

    @GetMapping("/{id}")
    public SinglePost findById(@PathVariable Integer id) throws NotFoundException {
        return service.findById(id, SinglePost.class);
    }
    @GetMapping("/users/{id}")
    public List<Post> getAllByUserId (@PathVariable Integer id) throws NotFoundException {
        return  service.getAllByUserId(id);
    }


    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) throws NotFoundException {
        service.delete(id);
    }
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public SinglePost insert(@RequestBody PostRequest record) throws NotFoundException {
       record.setCreatedTime(new Timestamp(System.currentTimeMillis()));
        //record.setUserId(userService.getCurrentId());
       // record.setCondition("new");
       // record.setUserId(1);
       // record.setPrice(BigDecimal.valueOf(4.12));
       // record.setAuthorName("sasa");
       // record.setCategoryId(1);
        return service.insert(record, SinglePost.class);
    }

    @PutMapping("/{id}")
    public SinglePost update(@PathVariable Integer id,@RequestBody PostRequest countryRequest) throws NotFoundException{
        countryRequest.setCreatedTime(new Timestamp(System.currentTimeMillis()));
        return service.update(id,countryRequest,SinglePost.class);
    }


}