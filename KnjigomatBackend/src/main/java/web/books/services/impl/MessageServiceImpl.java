package web.books.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.stereotype.Service;
import web.books.base.CrudJpaService;
import web.books.models.dto.Message;
import web.books.models.entities.MessageEntity;
import web.books.repositories.MessageEntityRepository;
import web.books.services.MessageService;
import web.books.services.UserService;

import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MessageServiceImpl extends CrudJpaService<MessageEntity, Integer> implements MessageService {

    private MessageEntityRepository repository;
    private ModelMapper modelMapper;
    private UserService userService;

    public MessageServiceImpl(MessageEntityRepository repository, ModelMapper modelMapper, UserService userService) {
        super(repository, modelMapper, MessageEntity.class);
        this.repository = repository;
        this.modelMapper = modelMapper;
        this.userService = userService;
    }

    @Override
    public Message sendMessage(String text, Integer id) {
        Message message = new Message();
        message.setText(text);
        message.setChatId(Message.setChatID(userService.getCurrentId(), id));
        message.setReceiverId(id);
        message.setSenderId(userService.getCurrentId());
        message.setCreatedTime(new Timestamp(System.currentTimeMillis()));
        return super.insert(message, Message.class);
    }

    @Override
    public List<Message> getMessagesWithUser(Integer id) {
        Integer senderId = userService.getCurrentId();
        Integer receiverId = id;
        return repository
                .getAllByChatId(Message.setChatID(senderId, receiverId))
                .stream()
                .map(e -> modelMapper.map(e, Message.class))
                .collect(Collectors.toList());
    }
}
