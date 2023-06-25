package web.books.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import web.books.models.entities.ReportEntity;

public interface ReportEntityRepository extends JpaRepository<ReportEntity, Integer> {


}
