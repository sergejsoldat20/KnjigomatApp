package web.books.models.requests;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class CommentRequest {
    private Timestamp createdTime;
    private String text;
    private Integer postId;
    private Integer userId;
}
