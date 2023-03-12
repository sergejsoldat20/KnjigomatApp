package web.books.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import web.books.models.entities.PhotoEntity;

import java.util.List;

public interface PhotoEntityRepository extends JpaRepository<PhotoEntity, Integer> {
    List<PhotoEntity> getAllByPostId(Integer id);
}
