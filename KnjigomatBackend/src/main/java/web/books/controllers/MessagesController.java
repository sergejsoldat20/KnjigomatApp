package web.books.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import web.books.models.dto.Message;
import web.books.models.requests.MessageRequest;
import web.books.services.MessageService;
import web.books.services.UserService;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/messages")
public class MessagesController {

    private final MessageService messageService;

    public MessagesController(MessageService messageService){
        this.messageService = messageService;
    }

    @PostMapping("/send-message/{id}")
    public void sendMessage(@PathVariable Integer id, @RequestBody MessageRequest request) {
        messageService.sendMessage(request.getText(), id);
    }

    @GetMapping("/for-chat/{id}")
    public List<Message> getMessagesForChat(@PathVariable Integer id){
        return messageService.getMessagesWithUser(id);
    }
}
