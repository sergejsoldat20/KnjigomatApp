package web.books.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import web.books.base.CrudService;
import web.books.models.dto.Post;

import java.math.BigDecimal;
import java.util.List;

public interface PostService extends CrudService<Integer> {
    List<Post> getAllByUserId(Integer id);
    List<Post> getAll();
    <T> Page<T> findAll(Pageable page, Class<T> resultDtoClass);
    Page<Post> getAllFilteredByAuthorName(Pageable page, String authorName);
    Page<Post> getAllFilteredByCategoryName(Pageable page, String categoryName);
    Page<Post> getAllFilteredByPriceIsBetween(Pageable page, BigDecimal lowest, BigDecimal highest);

    Page<Post> searchByName(Pageable page, String query);
}
