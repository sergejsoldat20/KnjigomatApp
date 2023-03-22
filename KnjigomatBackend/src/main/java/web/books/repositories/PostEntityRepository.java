package web.books.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import web.books.models.dto.Post;
import web.books.models.entities.PostEntity;
import web.books.models.entities.UserEntity;

import java.math.BigDecimal;
import java.util.List;

public interface PostEntityRepository extends JpaRepository<PostEntity, Integer> {
    List<PostEntity> getAllByUserId(Integer id);
    List<PostEntity> getAllByAuthorName(String authorName);
    List<PostEntity> getAllByPriceIsBetween(BigDecimal lowest,BigDecimal highest);
    List<PostEntity> getAllByCategoryName(String categoryName);
    @Query("SELECT p FROM PostEntity p WHERE (:priceFrom IS NULL OR p.price >= :priceFrom) " +
            "AND (:priceTo IS NULL OR p.price <= :priceTo) " +
            "AND (:categoryName IS NULL OR p.category.name = :categoryName) " +
            "AND (:authorName IS NULL OR p.authorName = :authorName)")
    List<PostEntity> filteredPosts(
            BigDecimal priceFrom, BigDecimal priceTo, String categoryName, String authorName);
    @Query("SELECT DISTINCT p.authorName FROM PostEntity p ORDER BY p.authorName")
    List<String> getAllDistinctAuthors();

    @Query("SELECT DISTINCT p.category.name FROM PostEntity  p ORDER BY p.category.name")
    List<String> getAllDistinctCategories();

}
