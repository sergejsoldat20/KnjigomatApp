package web.books.models.dto;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class Message {

    public static String setChatID(Integer senderId, Integer receiverId){
        return senderId > receiverId ?
                senderId.toString().concat(receiverId.toString()) :
                receiverId.toString().concat(senderId.toString());
    }
    private String chatId;
    private Integer senderId;
    private Integer receiverId;
    private Integer id;
    private String text;
    private Timestamp createdTime;
}
