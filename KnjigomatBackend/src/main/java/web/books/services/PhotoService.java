package web.books.services;

import web.books.base.CrudService;
import web.books.models.dto.Comment;
import web.books.models.dto.Photo;

import java.util.List;

public interface PhotoService extends CrudService<Integer> {
    List<Photo> getAllByPostId(Integer id);

}
