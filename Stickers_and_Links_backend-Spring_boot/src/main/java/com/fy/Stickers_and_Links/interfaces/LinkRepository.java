package com.fy.Stickers_and_Links.interfaces;

import java.util.Optional;

import com.fy.Stickers_and_Links.models.Link;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LinkRepository extends JpaRepository<Link, Integer>{
    
    @Query("SELECT u FROM Link u WHERE u.url = ?1")
    Optional<Link> findLinkByUrl(String url);

}
