import { Component, OnInit, Input} from '@angular/core';
import { faEdit, faTimesCircle, faCheckCircle,  faBan} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-link-btn',
  templateUrl: './link-btn.component.html',
  styleUrls: ['./link-btn.component.css']
})
export class LinkBtnComponent implements OnInit {
  @Input() position!: string
  @Input() action!: string

  faEdit = faEdit
  faTimesCircle = faTimesCircle
  faCheckCircle = faCheckCircle
  faBan = faBan
  
  constructor() { }

  ngOnInit(): void {
  }
}
