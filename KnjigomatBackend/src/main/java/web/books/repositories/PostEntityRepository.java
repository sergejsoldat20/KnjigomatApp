package web.books.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import web.books.models.entities.PostEntity;

public interface PostEntityRepository extends JpaRepository<PostEntity, Integer> {
}
