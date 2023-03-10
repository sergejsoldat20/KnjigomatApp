package web.books.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import web.books.models.entities.PostEntity;

import java.util.List;

public interface PostRepository extends JpaRepository<PostEntity, Integer> {
    List<PostEntity> getAllByUser_Id(Integer id);
}
