package web.books.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import web.books.base.CrudJpaService;
import web.books.base.CrudService;
import web.books.models.DTO.PostDTO;
import web.books.models.entities.PostEntity;
import web.books.repositories.PostRepository;
import web.books.services.PostService;

import java.time.LocalDate;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl extends CrudJpaService<PostEntity, Integer> implements PostService {
    private final PostRepository repository;
    private final ModelMapper modelMapper;

    public PostServiceImpl(PostRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper, PostEntity.class);
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<PostDTO> getAll(){
        return super.findAll(PostDTO.class).stream().sorted(new Comparator<PostDTO>() {
            @Override
            public int compare(PostDTO o1, PostDTO o2) {
                return o2.getCreatedTime().compareTo(o1.getCreatedTime());
            }
        }).collect(Collectors.toList());
    }

    @Override
    public List<PostDTO> getAllByUserId(Integer id) {
        return repository.getAllByUser_Id(id).stream().map(a->modelMapper.map(a,PostDTO.class)).collect(Collectors.toList());
    }

    @Override
    public Page<PostDTO> getAllFilteredByTime(Pageable page, String createdTime) {
        LocalDate date = LocalDate.parse(createdTime);
        System.out.println(createdTime);

        List<PostDTO> filteredByTime = repository
                .findAll()
                .stream()
                .filter(x -> x.getCreatedTime().toLocalDateTime().toLocalDate().equals(date))
                .map(m -> modelMapper.map(m, PostDTO.class))
                .collect(Collectors.toList());
        int pageSize = page.getPageSize();
        int start = page.getPageNumber() * pageSize;
        int end = Math.min((page.getPageNumber() + 1) * pageSize, filteredByTime.size());


        return new PageImpl<>(filteredByTime.subList(start, end), page, filteredByTime.size());
    }
}
