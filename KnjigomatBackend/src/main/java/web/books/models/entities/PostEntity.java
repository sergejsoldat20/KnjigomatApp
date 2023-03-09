package web.books.models.entities;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;

@Data
@Entity
@Table(name = "post", schema = "knjigomat", catalog = "")

public class PostEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id@Column(name = "id")
    private Integer id;
    @Basic@Column(name = "name")
    private String name;
    @Basic@Column(name = "description")
    private String description;
    @Basic@Column(name = "price")
    private BigDecimal price;
    @Basic@Column(name = "author_name")
    private String authorName;
    @Basic@Column(name = "created_time")
    private Timestamp createdTime;
    @Basic@Column(name = "deleted")
    private Boolean deleted;
    @Basic@Column(name = "condition")
    private String condition;
    @OneToMany(mappedBy = "post")
    private List<CommentEntity> comments;
    @OneToMany(mappedBy = "postByPostId")
    private List<PhotoEntity> photos;
    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id", nullable = false)
    private CategoryEntity category;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    private UserEntity user;

}
