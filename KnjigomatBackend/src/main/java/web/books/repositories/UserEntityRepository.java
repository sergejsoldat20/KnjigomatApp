package web.books.repositories;

import jakarta.persistence.Entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import web.books.models.entities.UserEntity;

import java.util.List;
import java.util.Optional;

public interface UserEntityRepository extends JpaRepository<UserEntity, Integer> {
    Optional<UserEntity> findByUsername(String username);
    @Query("select u.role from UserEntity u where u.username = :username")
    String findRoleByUsername(String username);
    @Query("select u.id from UserEntity u where u.username = :username")
    Integer findIdByUsername(String username);
    Boolean existsByUsername(String username);
    UserEntity findUserEntityByEmail(String email);
    String findUsernameById(Integer id);
    UserEntity getUserEntityById(Integer id);
    @Query("select distinct u from UserEntity u where u.id in (select distinct m.receiverId from MessageEntity m where m.senderId = :userId)")
    List<UserEntity> findChatPartnersReceived(Integer userId);

    @Query("select distinct u from UserEntity u where u.id in (select distinct  m.senderId from MessageEntity m where m.receiverId = :userId)")
    List<UserEntity> findChatPartnersSent(Integer userId);

    @Procedure(name = "findChatPartners")
    List<UserEntity> findChatPartners(@Param("userId") Integer userId);
    /*
    CREATE DEFINER=`root`@`localhost` PROCEDURE `findChatPartners`(IN `userId` INT)
    BEGIN
    SELECT DISTINCT u.*
    FROM user u
    WHERE u.id IN (
        SELECT DISTINCT sender_id
        FROM message
        WHERE receiver_id = userId
        UNION
        SELECT DISTINCT receiver_id
        FROM message
        WHERE sender_id = userId
    );
    END
    END*/
}
