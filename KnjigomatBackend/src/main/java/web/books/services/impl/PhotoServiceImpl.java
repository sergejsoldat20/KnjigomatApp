package web.books.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.data.jpa.repository.JpaRepository;
import web.books.base.CrudJpaService;
import web.books.models.entities.PhotoEntity;
import web.books.repositories.PhotoEntityRepository;
import web.books.services.PhotoService;

public class PhotoServiceImpl extends CrudJpaService<PhotoEntity, Integer> implements PhotoService {
    private PhotoEntityRepository repository;

    public PhotoServiceImpl(PhotoEntityRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper, PhotoEntity.class);
        this.repository = repository;
    }
}
