package web.books.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import web.books.models.entities.CategoryEntity;

public interface CategoryEntityRepository extends JpaRepository<CategoryEntity, Integer> {
}
