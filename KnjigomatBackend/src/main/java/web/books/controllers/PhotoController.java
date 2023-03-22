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
@CrossOrigin("http://localhost:3000")
@RequestMapping("/photos")
public class PhotoController {

    private PhotoService photoService;

    public PhotoController(PhotoService photoService) {
        this.photoService = photoService;
    }

    @GetMapping("/by-post/{id}")
    public List<Photo> getPhotosByPostId(@PathVariable Integer id){
        return photoService.getAllByPostId(id);
    }
    @GetMapping("/first-photo/by-post/{id}")
    public Photo getFirstPhotoById(@PathVariable Integer id){
        List<Photo> photos = photoService.getAllByPostId(id);
        if (!photos.isEmpty()) {
            return photos.get(0);
        } else {
            return null;
        }
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
