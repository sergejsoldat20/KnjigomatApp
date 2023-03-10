package web.books.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import web.books.models.dto.Message;
import web.books.models.requests.MessageRequest;
import web.books.services.MessageService;
import web.books.services.UserService;

import java.util.List;

@RestController
@RequestMapping("messages")
public class MessagesController {

    private MessageService messageService;
    private UserService userService;

    public MessagesController(MessageService messageService, UserService userService){
        this.messageService = messageService;
        this.userService = userService;
    }

    @PostMapping("/send-message/{id}")
    @PreAuthorize("hasRole(SecurityContst.USER) || hasRole(SecurityContst.ADMIN)")
    public void sendMessage(@PathVariable Integer id, @RequestBody MessageRequest request) {
        messageService.sendMessage(request.getText(), id);
    }

    @GetMapping("for-chat/{id}")
    @PreAuthorize("hasRole(SecurityContst.USER) || hasRole(SecurityContst.ADMIN)")
    public List<Message> getMessagesForChat(@PathVariable Integer id){
        return messageService.getMessagesWithUser(id);
    }

}
