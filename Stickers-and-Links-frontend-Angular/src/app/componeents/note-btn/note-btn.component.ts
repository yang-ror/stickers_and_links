import { Component, OnInit, Input} from '@angular/core';
import { faEdit, faTimesCircle, faCheckCircle,  faBan} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-note-btn',
  templateUrl: './note-btn.component.html',
  styleUrls: ['./note-btn.component.css']
})
export class NoteBtnComponent implements OnInit {
  @Input() action!: string
  faEdit = faEdit
  faTimesCircle = faTimesCircle
  faCheckCircle = faCheckCircle
  faBan = faBan

  constructor() { }

  ngOnInit(): void {
  }

}
