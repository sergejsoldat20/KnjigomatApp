package web.books.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import web.books.models.entities.CommentEntity;

import java.util.List;

public interface CommentEntityRepository extends JpaRepository<CommentEntity,Integer> {
    List<CommentEntity> getAllByPostId(Integer id);
}
