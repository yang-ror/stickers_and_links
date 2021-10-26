import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-note-color-btn',
  templateUrl: './note-color-btn.component.html',
  styleUrls: ['./note-color-btn.component.css']
})
export class NoteColorBtnComponent implements OnInit {
  @Input() color!: string
  @Output() onSetColor: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
}
