package com.fy.Stickers_and_Links.interfaces;

import java.util.Optional;

import com.fy.Stickers_and_Links.models.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteRepository extends JpaRepository<Note, Integer>{
    
    @Query("SELECT n FROM Note n WHERE n.content = ?1")
    Optional<Note> findNoteByContent(String Content);

}
