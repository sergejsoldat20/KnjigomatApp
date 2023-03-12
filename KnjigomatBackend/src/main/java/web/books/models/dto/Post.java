package web.books.models.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.sql.Timestamp;

@Data
public class Post {
        private Integer id;
        private String name;
        private String description;
        private BigDecimal price;
        private String authorName;
        private Timestamp createdTime;
        private Boolean deleted;
        private String state;
        private String categoryName;
        private Integer userId;
}
