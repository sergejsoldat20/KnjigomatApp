package web.books.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web.books.exceptions.NotFoundException;
import web.books.models.dto.Report;
import web.books.models.dto.User;
import web.books.models.requests.ReportRequest;
import web.books.services.ReportService;
import web.books.services.UserService;

import java.sql.Timestamp;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/reports")
public class ReportController {

    private final ReportService service;
    private final UserService userService;


    public ReportController(ReportService service, UserService userService) {
        this.service = service;
        this.userService = userService;
    }

    @GetMapping
    public List<Report> findAll() throws NotFoundException {
        return service.findAll(Report.class);
    }

    @PostMapping("/insert")
    public ResponseEntity<Report> insert(@RequestBody ReportRequest report) throws NotFoundException {
        report.setUserId(userService.getCurrentId());
        report.setCreatedTime(new Timestamp(System.currentTimeMillis()));
        return new ResponseEntity<>(service.insert(report, Report.class), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id) throws NotFoundException {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
