import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { Note } from '../../Note'

@Component({
  selector: 'app-sticker-panel',
  templateUrl: './sticker-panel.component.html',
  styleUrls: ['./sticker-panel.component.css']
})
export class StickerPanelComponent implements OnInit {
  colors: string[] = ['yellow', 'green', 'blue', 'red', 'purple']
  curColor = "yellow"
  notes: Note[] = []
  newNote: string = ""

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((notes) => this.notes = notes)
  }

  addNote(){
    var note: Note = {
      content: this.newNote,
      color: this.curColor,
      hide: false
    }
    this.noteService.addNote(note).subscribe((note) => this.notes.push(note))
    // this.noteService.addNote(note).subscribe((note) => console.log(note))
    this.newNote = ""
  }

  deleteNote(note: Note){
    this.noteService.deleteNote(note).subscribe(() => this.notes = this.notes.filter((n) => n.id !== note.id))
  }

  updateNote(note: Note){
    this.noteService.updateNote(note).subscribe((note) => {
      for(let i = 0; i < this.notes.length; i++){
        if(this.notes[i].id == note.id){
          this.notes[i] = note
        }
      }
    })
  }

  onSetColor(color: string){
    this.curColor = color
  }
}
