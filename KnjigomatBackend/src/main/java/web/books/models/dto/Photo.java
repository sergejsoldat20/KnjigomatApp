package web.books.models.dto;

import jakarta.persistence.*;
import lombok.Data;
import web.books.models.entities.PostEntity;

@Data
public class Photo {
    private Integer id;
    private String photoUrl;
    private Integer postId;
    //private PostEntity post;
}
