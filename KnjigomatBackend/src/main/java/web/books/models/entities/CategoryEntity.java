package web.books.models.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@Entity
@Table(name = "category", schema = "knjigomat", catalog = "")
public class CategoryEntity {
    @Id@Column(name = "id")
    private Integer id;
    @Basic@Column(name = "name")
    private String name;
    @OneToMany(mappedBy = "category")
    private List<PostEntity> posts;

}
