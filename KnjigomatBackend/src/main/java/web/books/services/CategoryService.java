package web.books.services;

import web.books.models.dto.Category;
import web.books.models.entities.CategoryEntity;

import java.util.List;

public interface CategoryService {
    List<Category> getAll();
}
