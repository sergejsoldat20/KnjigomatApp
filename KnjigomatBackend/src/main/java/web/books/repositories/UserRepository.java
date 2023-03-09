package web.books.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import web.books.models.entities.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {
}
