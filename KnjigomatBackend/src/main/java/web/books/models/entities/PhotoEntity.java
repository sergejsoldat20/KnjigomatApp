package web.books.models.entities;

import jakarta.persistence.*;
import lombok.*;
import web.books.base.BaseEntity;

@Data
@Entity
@Table(name = "photo", schema = "knjigomat", catalog = "")
public class PhotoEntity implements BaseEntity<Integer> {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id@Column(name = "id")
    private Integer id;
    @Basic@Column(name = "photo_url")
    private String photoUrl;
    @ManyToOne@JoinColumn(name = "post_id", referencedColumnName = "id", nullable = false)
    private PostEntity post;

}
