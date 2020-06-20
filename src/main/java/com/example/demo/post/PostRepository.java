package com.example.demo.post;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public class PostRepository extends JpaRepository<Post, Long> {
}
