package web.books.models.dto;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import lombok.Data;

import java.sql.Timestamp;

@Data
public class Report {
    private Integer id;
    private String reportText;
    private Timestamp createdTime;
    private int userId;
    private int postId;
}
