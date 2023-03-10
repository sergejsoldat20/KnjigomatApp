package web.books.models.entities;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;

@Data
@Entity
@Table(name = "comment", schema = "knjigomat", catalog = "")
public class CommentEntity {
    @Id@Column(name = "id")
    private Integer id;
    @Basic@Column(name = "created_time")
    private Timestamp createdTime;
    @Basic@Column(name = "text")
    private String text;
    @Basic@Column(name = "deleted")
    private Boolean deleted;
    @ManyToOne
    @JoinColumn(name = "post_id", referencedColumnName = "id", nullable = false)
    private PostEntity post;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    private UserEntity user;

}
