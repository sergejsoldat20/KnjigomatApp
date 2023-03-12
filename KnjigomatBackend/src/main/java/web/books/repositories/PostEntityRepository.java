package web.books.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import web.books.models.entities.PostEntity;
import web.books.models.entities.UserEntity;

import java.util.List;

public interface PostEntityRepository extends JpaRepository<PostEntity, Integer> {
    List<PostEntity> getAllByUser_Id(Integer id);
}
