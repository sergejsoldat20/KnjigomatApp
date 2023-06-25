package web.books.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import web.books.base.CrudJpaService;
import web.books.models.entities.PostEntity;
import web.books.models.entities.ReportEntity;
import web.books.models.entities.UserEntity;
import web.books.repositories.PostEntityRepository;
import web.books.repositories.ReportEntityRepository;
import web.books.services.ReportService;

@Service
public class ReportServiceImpl extends CrudJpaService<ReportEntity, Integer> implements ReportService {

    private final ReportEntityRepository repository;
    public ReportServiceImpl(ReportEntityRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper, ReportEntity.class);
        this.repository = repository;
    }
}
