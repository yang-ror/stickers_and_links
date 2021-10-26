import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef  } from '@angular/core';
import { Link } from '../../Link'

@Component({
  selector: 'app-link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.css']
})
export class LinkItemComponent implements OnInit {
  @Input() link!: Link
  @Output() onDeleteLink: EventEmitter<Link> = new EventEmitter()
  @Output() onSubmitLink: EventEmitter<Link> = new EventEmitter()
  // @ViewChild('linkInput') linkInputElement!: ElementRef;

  editingState: boolean = false
  linkTitle: string = ""

  constructor() { }

  ngOnInit(): void {
    this.linkTitle = this.link.title
  }

  onEdit(): void {
    this.editingState = true
    this.linkTitle = this.link.title
    // this.linkInputElement.nativeElement.focus()
  }
  onDelete(): void {
    this.onDeleteLink.emit()
  }
  onSubmit(): void {
    var newLink: Link = {
      id: this.link.id,
      title: this.linkTitle,
      url: this.link.url,
      hide: this.link.hide
    }
    this.onSubmitLink.emit(newLink)
    this.editingState = false
  }
  onCancel(): void {
    this.editingState = false
  }
}
