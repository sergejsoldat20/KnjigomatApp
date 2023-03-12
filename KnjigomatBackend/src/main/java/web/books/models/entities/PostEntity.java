package web.books.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import web.books.base.BaseEntity;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;

@Data
@Entity
@Table(name = "post")
@SQLDelete(sql = "UPDATE comment SET deleted = true WHERE id=?")
@Where(clause = "deleted=false")
@EntityListeners(AuditingEntityListener.class)

public class PostEntity implements BaseEntity<Integer> {
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
    private Boolean deleted=Boolean.FALSE;
    @Basic@Column(name = "state")
    private String state;
    @OneToMany(mappedBy = "post")
    @JsonIgnore
    private List<CommentEntity> comments;
    @OneToMany(mappedBy = "post")
    @JsonIgnore
    private List<PhotoEntity> photos;
    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id", nullable = false)
    private CategoryEntity category;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    private UserEntity user;

}
