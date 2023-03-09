package web.books.models.entities;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table(name = "photo", schema = "knjigomat", catalog = "")
public class PhotoEntity {
    @Id@Column(name = "id")
    private Integer id;
    @Basic@Column(name = "photo_url")
    private String photoUrl;
    @Basic@Column(name = "post_id")
    private Integer postId;
    @ManyToOne@JoinColumn(name = "post_id", referencedColumnName = "id", nullable = false)
    private PostEntity postByPostId;

}
