package web.books.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import web.books.exceptions.NotFoundException;
import web.books.models.dto.Comment;
import web.books.models.dto.Post;
import web.books.models.requests.PostRequest;
import web.books.models.requests.SearchRequest;
import web.books.security.SecurityConsts;
import web.books.services.PostService;
import web.books.services.UserService;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;
import java.util.Objects;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/posts")
public class PostController {

    private final PostService service;

    private final UserService userService;

    public PostController(PostService service, UserService userService) {
        this.service = service;
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
    public Post findById(@PathVariable Integer id) throws NotFoundException {
        return service.findById(id, Post.class);
    }

    @GetMapping("/users/{id}")
    public List<Post> getAllByUserId (@PathVariable Integer id) throws NotFoundException {
        return  service.getAllByUserId(id);
    }

    @GetMapping("/search")
    public Page<Post> search(Pageable page, @RequestBody SearchRequest request){
        return service.searchByName(page, request.getQuery());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) throws NotFoundException {
        Post post = service.findById(id, Post.class);
        if (Objects.equals(post.getUserId(), userService.getCurrentId()) || userService.getCurrentUser().getRole().equals(SecurityConsts.ADMIN)) {
            service.delete(id);
        }
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Post insert(@RequestBody PostRequest postRequest) throws NotFoundException {
       postRequest.setCreatedTime(new Timestamp(System.currentTimeMillis()));
       postRequest.setUserId(userService.getCurrentId());
       return service.insert(postRequest, Post.class);
    }

    @PutMapping("/{id}")
    public Post update(@PathVariable Integer id,@RequestBody PostRequest postRequest) throws NotFoundException{
        postRequest.setCreatedTime(new Timestamp(System.currentTimeMillis()));
        postRequest.setUserId(userService.getCurrentId());
        Post post = service.findById(id, Post.class);
        if (Objects.equals(post.getUserId(), userService.getCurrentId()) || userService.getCurrentUser().getRole().equals(SecurityConsts.ADMIN)) {
            return service.update(id,postRequest,Post.class);
        }else {
            return post;
        }
    }

    @GetMapping("/price-between")
    public Page<Post> getAllFilteredByPriceIsBetween(Pageable page, @RequestParam BigDecimal lowest,@RequestParam BigDecimal highest) {
        return service.getAllFilteredByPriceIsBetween(page, lowest,highest);
    }

    @GetMapping("/author-name")
    public Page<Post> getAllFilteredByAuthorName(Pageable page,@RequestParam String authorName){
        String [] names = authorName.split("-");
        String fullName = String.join(" ",names);
        return service.getAllFilteredByAuthorName(page,fullName);
    }
    @GetMapping("/category-name")
    public Page<Post> getAllFilteredByCategoryName(Pageable page,@RequestParam String categoryName){
        return service.getAllFilteredByCategoryName(page, categoryName);
    }
    @GetMapping("/filtered")
    public Page<Post> getAllFilteredPosts(
            Pageable page,
            Sort sort,
            @RequestParam(required = false) BigDecimal priceFrom,
            @RequestParam(required = false) BigDecimal priceTo,
            @RequestParam(required = false) String categoryName,
            @RequestParam(required = false) String authorName
    ) {
        if(authorName!=null) {
            String[] names = authorName.split("-");
            authorName = String.join(" ", names);
        }
        return service.getFiltered(page,priceFrom,priceTo,categoryName,authorName,sort);
    }
    @GetMapping("/users/{id}/paginated")
    public Page<Post> getAllByUserIdPaginated(Pageable page,@PathVariable Integer id){
        return service.getAllByUserIdPaginated(page,id);
    }
    @GetMapping("/all-authors")
    public List<String> getAllDistinctAuthors(){
        return service.getAllDistinctAuthors();
    }
    @GetMapping("/all-categories")
    public List<String> getAllDistinctCategories(){
        return service.getAllDistinctCategories();
    }
}