package com.example.demo.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class PostResource{

    private PostService postService;

    @Autowired
    private PostRepository postRepository;

    @CrossOrigin
    @GetMapping("/api/posts")
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }
    @CrossOrigin
    @GetMapping("/api/posts/{id}")
    public Post get(@PathVariable long id) {
        return postRepository.findById(id).get();
    }
    @CrossOrigin
    @PostMapping("/api/posts")
    public ResponseEntity<Void> createPost(@RequestBody Post post) {
        Post postUpdated = postRepository.save(post);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()

                .path("/{id").buildAndExpand(postUpdated.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }
}
