package web.books.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import web.books.base.CrudJpaService;
import web.books.base.CrudService;
import web.books.models.DTO.Post;
import web.books.models.entities.PostEntity;

import java.util.List;

public interface PostService extends CrudService<Integer> {
    List<Post> getAllByUserId(Integer id);
  // Page<Post> getAllFilteredByTime(Pageable page, String createdTime);
   List<Post> getAll();
    <T> Page<T> findAll(Pageable page, Class<T> resultDtoClass);
}
