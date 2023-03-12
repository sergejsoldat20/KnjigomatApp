package web.books.models.requests;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import web.books.models.entities.CategoryEntity;
import web.books.models.entities.CommentEntity;
import web.books.models.entities.PhotoEntity;
import web.books.models.entities.UserEntity;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;

@Data
public class PostRequest {
    private String name;
    private String description;
    private BigDecimal price;
    private String authorName;
    private Timestamp createdTime;
    private String state;
    private Integer categoryId;
    private Integer userId;


}

