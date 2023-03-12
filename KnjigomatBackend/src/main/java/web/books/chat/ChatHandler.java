package web.books.chat;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;
import web.books.models.dto.Message;
import web.books.models.entities.UserEntity;
import web.books.models.requests.MessageRequest;
import web.books.repositories.UserEntityRepository;
import web.books.services.UserService;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;


public class ChatHandler extends TextWebSocketHandler {
    private static final Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
    private static final Map<String, String> userNames = new ConcurrentHashMap<>();

    @Autowired
    private UserService userService;

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        String userId = getUserIdFromSession(session);
        if (userId != null) {
            sessions.put(userId, session);
            userNames.put(userId, userService.getUsernameById(Integer.parseInt(userId)));
        }
    }


    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
       /*
       override this method
        */
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        String userId = getUserIdFromSession(session);
        if (userId != null) {
            sessions.remove(userId);
            userNames.remove(userId);
        }
    }

    private String getUserIdFromSession(WebSocketSession session) {
        String userId = (String) session.getAttributes().get("userId");
        if (userId == null) {
            try {
                session.close(CloseStatus.BAD_DATA.withReason("Missing userId attribute"));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return userId;
    }
}

