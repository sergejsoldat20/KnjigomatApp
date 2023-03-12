package web.books.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import web.books.models.entities.UserEntity;

import java.util.Optional;

public interface UserEntityRepository extends JpaRepository<UserEntity, Integer> {
    Optional<UserEntity> findByUsername(String username);
    @Query("select u.role from UserEntity u where u.username = :username")
    String findRoleByUsername(String username);
    @Query("select u.id from UserEntity u where u.username = :username")
    Integer findIdByUsername(String username);
    Boolean existsByUsername(String username);
}
