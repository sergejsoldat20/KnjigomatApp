package web.books.models.DTO;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
public class Photo {
    private Integer id;
    private String photoUrl;
}
