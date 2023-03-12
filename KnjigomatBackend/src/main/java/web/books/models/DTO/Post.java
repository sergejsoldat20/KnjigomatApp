package web.books.models.DTO;

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
public class Post {
        private Integer id;
        private String name;
        private String description;
        private BigDecimal price;
        private String authorName;
        private Timestamp createdTime;
        private Boolean deleted;
        private String condition;
        private String categoryName;



}
