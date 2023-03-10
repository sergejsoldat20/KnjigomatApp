package web.books.chat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;
import web.books.models.entities.UserEntity;
import web.books.repositories.UserEntityRepository;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class ChatHandler extends TextWebSocketHandler {
    private static final Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();

    @Autowired
    private UserEntityRepository userEntityRepository;

   /* @Autowired
    private MessageRepository messageRepository;

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        String username = getUsernameFromSession(session);
        sessions.put(username, session);
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        ChatMessage chatMessage = mapper.readValue(message.getPayload(), ChatMessage.class);

        User sender = userRepository.findByUsername(chatMessage.getSender());
        User recipient = userRepository.findByUsername(chatMessage.getRecipient());

        Message messageEntity = new Message();
        messageEntity.setSender(sender);
        messageEntity.setRecipient(recipient);
        messageEntity.setContent(chatMessage.getContent());
        messageEntity.setTimestamp(LocalDateTime.now());
        messageRepository.save(messageEntity);

        WebSocketSession recipientSession = sessions.get(chatMessage.getRecipient());
        if (recipientSession != null && recipientSession.isOpen()) {
            ChatMessage response = new ChatMessage(chatMessage.getSender(), chatMessage.getContent());
            recipientSession.sendMessage(new TextMessage(mapper.writeValueAsString(response)));
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        String username = getUsernameFromSession(session);
        sessions.remove(username);
    }

    private String getUsernameFromSession(WebSocketSession session) {
        return session.getUri().getQuery().split("=")[1];
    }*/
}

