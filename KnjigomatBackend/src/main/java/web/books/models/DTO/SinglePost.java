package web.books.models.DTO;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import web.books.models.entities.CommentEntity;
import web.books.models.entities.PhotoEntity;

import java.util.List;

@Data
public class SinglePost extends Post{
    private List<Comment> comments;
    private List<Photo> photos;
}
