package web.books.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import web.books.models.dto.Category;
import web.books.repositories.CategoryEntityRepository;
import web.books.services.CategoryService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements CategoryService {

    private final CategoryEntityRepository repository;
    private final ModelMapper modelMapper;

    public CategoryServiceImpl(CategoryEntityRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<Category> getAll() {
        return repository
                .findAll()
                .stream()
                .map(c -> modelMapper.map(c, Category.class))
                .collect(Collectors.toList());
    }
}
