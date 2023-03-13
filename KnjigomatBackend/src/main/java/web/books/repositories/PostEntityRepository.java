package web.books.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import web.books.models.dto.Post;
import web.books.models.entities.PostEntity;
import web.books.models.entities.UserEntity;

import java.math.BigDecimal;
import java.util.List;

public interface PostEntityRepository extends JpaRepository<PostEntity, Integer> {
    List<PostEntity> getAllByUser_Id(Integer id);
    List<PostEntity> getAllByAuthorName(String authorName);
    List<PostEntity> getAllByPriceIsBetween(BigDecimal lowest,BigDecimal highest);
    List<PostEntity> getAllByCategoryName(String categoryName);
}
