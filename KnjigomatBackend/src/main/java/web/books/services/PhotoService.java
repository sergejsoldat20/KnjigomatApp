package web.books.services;

import org.springframework.web.multipart.MultipartFile;
import web.books.base.CrudService;
import web.books.models.dto.Photo;

import java.io.IOException;
import java.util.List;

public interface PhotoService extends CrudService<Integer> {
    List<Photo> getAllByPostId(Integer id);
    Photo uploadPhoto(Integer postId, MultipartFile file) throws IOException;

}
