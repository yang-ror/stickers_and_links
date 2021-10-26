import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../Note'

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  @Input() note!: Note
  @Output() onDeleteNote: EventEmitter<Note> = new EventEmitter()
  @Output() onSubmitNote: EventEmitter<Note> = new EventEmitter()

  editingState: boolean = false
  noteContent: string = ""

  constructor() { }

  ngOnInit(): void {
    this.noteContent = this.note.content
  }

  onEdit(){
    this.editingState = true
  }

  onDelete(){
    this.onDeleteNote.emit()
    this.editingState = false
  }

  onSubmit(){
    var newNote: Note = {
      id: this.note.id,
      content: this.noteContent,
      color: this.note.color,
      hide: this.note.hide
    }
    this.onSubmitNote.emit(newNote)
    this.editingState = false
  }

  onCancel(){
    this.editingState = false
  }

}
