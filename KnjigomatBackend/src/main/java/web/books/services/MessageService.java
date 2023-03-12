package web.books.services;

import web.books.base.CrudJpaService;
import web.books.base.CrudService;
import web.books.models.dto.Message;
import web.books.models.entities.MessageEntity;

import java.util.List;

public interface MessageService extends CrudService<Integer> {

    Message sendMessage(String text, Integer id);
    List<Message> getMessagesWithUser(Integer id);
}
