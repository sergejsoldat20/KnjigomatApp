package web.books.models.dto;

import lombok.Data;

import java.util.List;

@Data
public class SinglePost extends Post{
    private List<Comment> comments;
    private List<Photo> photos;
}
