package web.books.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import web.books.base.CrudJpaService;
import web.books.base.CrudService;
import web.books.models.DTO.PostDTO;
import web.books.models.entities.PostEntity;

import java.util.List;

public interface PostService extends CrudService<Integer> {
    List<PostDTO> getAllByUserId(Integer id);
   Page<PostDTO> getAllFilteredByTime(Pageable page, String createdTime);
   List<PostDTO> getAll();
}
