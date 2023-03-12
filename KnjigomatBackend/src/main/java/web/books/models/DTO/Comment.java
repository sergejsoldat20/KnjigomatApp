package web.books.models.DTO;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import web.books.models.entities.PostEntity;
import web.books.models.entities.UserEntity;

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
