package web.books.models.entities;

import jakarta.persistence.*;
import lombok.*;
import web.books.base.BaseEntity;

import java.util.List;

@Data
@Entity
@Table(name = "user", schema = "knjigomat", catalog = "")
public class UserEntity implements BaseEntity<Integer> {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id@Column(name = "id")
    private Integer id;
    @Basic@Column(name = "first_name")
    private String firstName;
    @Basic@Column(name = "last_name")
    private String lastName;
    @Basic@Column(name = "gender")
    private String gender;
    @Basic@Column(name = "email")
    private String email;
    @Basic@Column(name = "username")
    private String username;
    @Basic@Column(name = "password")
    private String password;
    @Basic@Column(name = "role")
    private String role;
    @Basic@Column(name = "account_confirmed")
    private Boolean accountConfirmed;
    @Basic@Column(name = "phone_number")
    private String phoneNumber;
    @OneToMany(mappedBy = "user")
    private List<CommentEntity> comments;
    @OneToMany(mappedBy = "receiverId")
    private List<MessageEntity> messagesReceived;
    @OneToMany(mappedBy = "senderId")
    private List<MessageEntity> messagesSent;
    @OneToMany(mappedBy = "user")
    private List<PostEntity> posts;

}
