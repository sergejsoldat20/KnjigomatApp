package web.books.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import web.books.base.CrudJpaService;
import web.books.models.dto.Post;
import web.books.models.entities.PostEntity;
import web.books.repositories.PostEntityRepository;
import web.books.search.SearchAlgorithm;
import web.books.services.PostService;

import java.math.BigDecimal;
import java.time.LocalDate;
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

    // ako se vise od tri karaktera u rijeci ne poklapaju bice false 
    @Override
    public Page<Post> searchByName(Pageable page, String query) {
        List<Post> searchedPosts = repository
                .findAll()
                .stream()
                .filter(x -> SearchAlgorithm.isSimilarToAnyToken(x.getName(), query, 1))
                .map(x -> modelMapper.map(x, Post.class))
                .collect(Collectors.toList());
        return new PageImpl<>(searchedPosts, page, searchedPosts.size());
    }

    @Override
    public List<Post> getAllByUserId(Integer id) {
        return repository.getAllByUserId(id).stream().map(a->modelMapper.map(a,Post.class)).collect(Collectors.toList());
    }

    @Override
    public Page<Post> getAllByUserIdPaginated(Pageable page, Integer id) {
        List<Post> postsByUserId = getAllByUserId(id);
        return getPostsPageable(page,postsByUserId);
    }

    @Override
    public Page<Post> getAllFilteredByAuthorName(Pageable page, String authorName) {
        List<Post> filteredByAuthorName = repository
                .getAllByAuthorName(authorName)
                .stream()
                .map(m -> modelMapper.map(m, Post.class)).toList();
        return getPostsPageable(page, filteredByAuthorName);
    }

    @Override
    public Page<Post> getAllFilteredByCategoryName(Pageable page, String categoryName) {
        List<Post> filteredByCategoryName = repository
                .getAllByCategoryName(categoryName)
                .stream()
                .map(m -> modelMapper.map(m, Post.class)).toList();
        return getPostsPageable(page, filteredByCategoryName);
    }

    @Override
    public Page<Post> getAllFilteredByPriceIsBetween(Pageable page, BigDecimal lowest, BigDecimal highest) {
        List<Post> filteredByPriceIsBetween = repository
                .getAllByPriceIsBetween(lowest,highest)
                .stream()
                .map(m->modelMapper.map(m,Post.class)).toList();
        return getPostsPageable(page,filteredByPriceIsBetween);
    }

    @Override
    public Page<Post> getFiltered(Pageable page, BigDecimal priceFrom, BigDecimal priceTo, String categoryName, String authorName, Sort sort,String search) {
        List<Post> filtered = repository
                .filteredPosts(priceFrom,priceTo,categoryName,authorName,sort,search)
                .stream()
                .map(m->modelMapper.map(m,Post.class)).toList();
        return getPostsPageable(page,filtered);
    }

    @Override
    public List<String> getAllDistinctAuthors() {
        return repository.getAllDistinctAuthors();
    }

    @Override
    public List<String> getAllDistinctCategories() {
        return repository.getAllDistinctCategories();
    }

    public Integer getUserIdByPostId(Integer id) {
        return repository.getUserIdByPostId(id);
    }
    private Page<Post> getPostsPageable(Pageable page, List<Post> postList) {
        int pageSize = page.getPageSize();
        int start = page.getPageNumber() * pageSize;
        int end = Math.min((page.getPageNumber() + 1) * pageSize, postList.size());

        return new PageImpl<>(postList.subList(start, end), page, postList.size());
    }
}
