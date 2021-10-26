package com.fy.Stickers_and_Links.service;

import java.util.List;
import java.util.Objects;

import com.fy.Stickers_and_Links.interfaces.NoteRepository;
import com.fy.Stickers_and_Links.models.Note;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

@Service
public class NoteService {

    private final NoteRepository noteRepository;

    @Autowired
    public NoteService(NoteRepository noteRepository){
        this.noteRepository = noteRepository;
    }

    public List<Note> getAllNotes(){
        return noteRepository.findAll();
    }

    public void addNote(Note note){
        noteRepository.save(note);
    }

    public void deleteNote(int NoteId) {
        boolean noteExists = noteRepository.existsById(NoteId);
        if(!noteExists){
            throw new IllegalStateException("note with id" + NoteId + "does not exists");
        }
        noteRepository.deleteById(NoteId);
    }

    public void updateNote(int noteId, Note newNote){
        Note note = noteRepository.findById(noteId).orElseThrow(() -> new IllegalStateException("note with id " + noteId + " does not exists"));
        if(newNote.getContent() != null && newNote.getContent().length() > 0 && !Objects.equals(note.getContent(), newNote.getContent())){
            note.setContent(newNote.getContent());
        }
        if(newNote.getColor() != null && newNote.getColor().length() > 0 && !Objects.equals(note.getColor(), newNote.getColor())){
            note.setColor(newNote.getColor());
        }
        if(!Objects.equals(note.getHide(), newNote.getHide())){
            note.setHide(newNote.getHide());
        }
        noteRepository.save(note);
    }
}
