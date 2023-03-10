package web.books.repositories;

import org.aspectj.bridge.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import web.books.models.entities.MessageEntity;

import java.util.List;

public interface MessageEntityRepository extends JpaRepository<MessageEntity, Integer> {
    List<MessageEntity> getAllByChatId(String chatId);
}
