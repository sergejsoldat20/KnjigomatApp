package web.books.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import web.books.models.dto.Photo;
import web.books.services.PhotoService;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("photos")
public class PhotoController {

    private PhotoService photoService;

    public PhotoController(PhotoService photoService) {
        this.photoService = photoService;
    }

    @GetMapping("photos/by-post/{id}")
    public List<Photo> getPhotosByPostId(Integer id){
        return photoService.getAllByPostId(id);
    }

    @PostMapping("/upload/{id}")
    public ResponseEntity<Photo> uploadPhoto(@RequestParam("file") MultipartFile file, @PathVariable Integer id) throws IOException {
       Photo photo = photoService.uploadPhoto(id, file);
       if(photo.getPhotoUrl() != null){
           return ResponseEntity.ok(photo);
       } else {
           return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
       }
    }
}
