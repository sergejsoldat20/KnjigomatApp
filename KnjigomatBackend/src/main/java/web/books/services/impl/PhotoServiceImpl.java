package web.books.services.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.modelmapper.ModelMapper;
import org.springframework.boot.Banner;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import web.books.base.CrudJpaService;
import web.books.models.dto.Comment;
import web.books.models.dto.Photo;
import web.books.models.entities.PhotoEntity;
import web.books.repositories.PhotoEntityRepository;
import web.books.services.PhotoService;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class PhotoServiceImpl extends CrudJpaService<PhotoEntity, Integer> implements PhotoService {
    private final PhotoEntityRepository repository;
    private final Cloudinary cloudinary;
    private final ModelMapper modelMapper;

    public PhotoServiceImpl(PhotoEntityRepository repository, ModelMapper modelMapper, Cloudinary cloudinary) {
        super(repository, modelMapper, PhotoEntity.class);
        this.repository = repository;
        this.cloudinary = cloudinary;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<Photo> getAllByPostId(Integer id) {
        return repository.getAllByPostId(id).stream().map(m->modelMapper.map(m, Photo.class)).collect(Collectors.toList());
    }

    @Override
    public Photo uploadPhoto(Integer postId, MultipartFile file) throws IOException {
        Photo photo = new Photo();
        photo.setPostId(postId);
        Map uploadResult = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.emptyMap());
        photo.setPhotoUrl(uploadResult.get("url").toString());
        return super.insert(photo, Photo.class);
    }
}
