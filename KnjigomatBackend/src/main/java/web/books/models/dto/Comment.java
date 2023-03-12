package web.books.models.dto;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class Comment {
    private Integer id;
    private Timestamp createdTime;
    private String text;
    private Integer postId;
    private String userUsername;
    private Integer userId;
}
