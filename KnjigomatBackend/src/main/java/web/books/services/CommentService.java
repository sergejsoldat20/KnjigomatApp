package web.books.services;

import web.books.base.CrudService;
import web.books.models.dto.Comment;

import java.util.List;

public interface CommentService extends CrudService<Integer> {
    List<Comment> getAllByPostId(Integer id);
}
