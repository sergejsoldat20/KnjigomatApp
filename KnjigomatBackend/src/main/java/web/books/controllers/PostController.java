package web.books.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import web.books.exceptions.NotFoundException;
import web.books.models.DTO.PostDTO;
import web.books.models.DTO.SinglePostoDTO;
import web.books.models.request.PostRequest;
import web.books.services.PostService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import java.sql.Timestamp;
import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private final PostService service;

    public PostController(PostService servise) {
        this.service = servise;
    }

    @GetMapping
    public List<PostDTO> findAll() {
        return service.findAll(PostDTO.class);
    }
/*
    @GetMapping("/paginated")
    public Page<PostDTO> findAll(Pageable page) {

        return service.findAll(page, PostDTO.class);
    }
*/

    @GetMapping("/date-filtered")
    public Page<PostDTO> findAll(Pageable page, @RequestParam String createdTime) {
        return service.getAllFilteredByTime(page, createdTime);
    }

    @GetMapping("/{id}")
    public SinglePostoDTO getById(@PathVariable Integer id) throws NotFoundException {
        return service.findById(id, SinglePostoDTO.class);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) throws NotFoundException {
        service.delete(id);
    }
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public SinglePostoDTO insert(@RequestBody PostRequest record) throws NotFoundException {
        record.setCreatedTime(new Timestamp(System.currentTimeMillis()));
        return service.insert(record, SinglePostoDTO.class);
    }

    @PutMapping("/{id}")
    public SinglePostoDTO update(@PathVariable Integer id,@RequestBody PostRequest countryRequest) throws NotFoundException{
        return service.update(id,countryRequest,SinglePostoDTO.class);
    }


}