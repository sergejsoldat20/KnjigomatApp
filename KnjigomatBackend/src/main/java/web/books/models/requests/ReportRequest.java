package web.books.models.requests;
import lombok.Data;

import java.sql.Timestamp;
@Data
public class ReportRequest {

    private String reportText;
    private Timestamp createdTime = new Timestamp(System.currentTimeMillis());
    private int userId;
    private int postId;
}
