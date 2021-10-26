package com.fy.Stickers_and_Links.controllers;

import java.util.List;

import com.fy.Stickers_and_Links.models.Note;
import com.fy.Stickers_and_Links.service.NoteService;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.beans.factory.annotation.Autowired;


@RestController
@RequestMapping(path = "/notes")
public class NoteController {

    private final NoteService noteService;

    @Autowired
    public NoteController(NoteService noteService){
        this.noteService = noteService;
    }

    @GetMapping()
    public List<Note> getNotes(){
        return noteService.getAllNotes();
    }

    @PostMapping()
    public Note addNote(@RequestBody Note note){
        noteService.addNote(note);
        return note;
    }

    @PutMapping(path = "/{noteId}")
    public Note updateNote(@PathVariable("noteId") int noteId, @RequestBody Note note){
        noteService.updateNote(noteId, note);
        return note;
    }

    @DeleteMapping(path = "/{noteId}")
    public void deleteNote(@PathVariable("noteId") int NoteId){
        noteService.deleteNote(NoteId);
    }
}

