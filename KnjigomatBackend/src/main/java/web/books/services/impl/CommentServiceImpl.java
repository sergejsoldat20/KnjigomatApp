package web.books.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import web.books.base.CrudJpaService;
import web.books.models.dto.Comment;
import web.books.models.entities.CommentEntity;
import web.books.repositories.CommentEntityRepository;
import web.books.services.CommentService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentServiceImpl extends CrudJpaService<CommentEntity,Integer> implements CommentService {
    private final CommentEntityRepository repository;
    private final ModelMapper modelMapper;
    public CommentServiceImpl(CommentEntityRepository repository, ModelMapper modelMapper){
        super(repository,modelMapper,CommentEntity.class);
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<Comment> getAllByPostId(Integer id) {
        return repository.getAllByPostId(id).stream().map(m->modelMapper.map(m,Comment.class)).collect(Collectors.toList());
    }
}
