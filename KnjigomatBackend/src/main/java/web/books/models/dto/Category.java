package web.books.models.dto;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import lombok.Data;

@Data
public class Category {
    private Integer id;
    private String name;
}
