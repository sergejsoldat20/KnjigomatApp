package web.books.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import web.books.base.CrudJpaService;
import web.books.models.dto.Post;
import web.books.models.entities.PostEntity;
import web.books.repositories.PostEntityRepository;
import web.books.search.SearchAlgorithm;
import web.books.services.PostService;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl extends CrudJpaService<PostEntity, Integer> implements PostService {

    private final PostEntityRepository repository;

    private final ModelMapper modelMapper;

    public PostServiceImpl(PostEntityRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper, PostEntity.class);
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<Post> getAll(){
        return super.findAll(Post.class).stream().sorted(new Comparator<Post>() {
            @Override
            public int compare(Post o1, Post o2) {
                return o2.getCreatedTime().compareTo(o1.getCreatedTime());
            }
        }).collect(Collectors.toList());
    }

    @Override
    public Page<Post> searchByName(Pageable page, String query) {
        List<Post> searchedPosts = repository
                .findAll()
                .stream()
                .filter(x -> SearchAlgorithm.isSimilarToAnyToken(x.getName(), query, 3))
                .map(x -> modelMapper.map(x, Post.class))
                .collect(Collectors.toList());

        return new PageImpl<>(searchedPosts, page, searchedPosts.size());
    }

    @Override
    public List<Post> getAllByUserId(Integer id) {
        return repository.getAllByUser_Id(id).stream().map(a->modelMapper.map(a,Post.class)).collect(Collectors.toList());
    }
/*
    @Override
    public Page<Post> getAllFilteredByTime(Pageable page, String createdTime) {
        LocalDate date = LocalDate.parse(createdTime);
        System.out.println(createdTime);

        List<Post> filteredByTime = repository
                .findAll()
                .stream()
                .filter(x -> x.getCreatedTime().toLocalDateTime().toLocalDate().equals(date))
                .map(m -> modelMapper.map(m, Post.class))
                .collect(Collectors.toList());
        int pageSize = page.getPageSize();
        int start = page.getPageNumber() * pageSize;
        int end = Math.min((page.getPageNumber() + 1) * pageSize, filteredByTime.size());


        return new PageImpl<>(filteredByTime.subList(start, end), page, filteredByTime.size());
    }

 */
}
