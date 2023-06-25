package web.books.models.entities;

import com.fasterxml.jackson.databind.ser.Serializers;
import jakarta.persistence.*;
import lombok.*;
import web.books.base.BaseEntity;

import java.sql.Timestamp;

@Data
@Entity
@Table(name = "report", schema = "knjigomat", catalog = "")
public class ReportEntity implements BaseEntity<Integer> {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Integer id;
    @Basic
    @Column(name = "report_text")
    private String reportText;
    @Basic
    @Column(name = "created_time")
    private Timestamp createdTime;

    @ManyToOne@JoinColumn(name = "post_id", referencedColumnName = "id", nullable = false)
    private PostEntity post;
    @ManyToOne@JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    private UserEntity user;

}
