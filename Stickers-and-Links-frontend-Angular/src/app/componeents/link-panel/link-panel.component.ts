import { Component, OnInit } from '@angular/core';
import { LinkService } from '../../service/link.service';
import { Link } from '../../Link'

@Component({
  selector: 'app-link-panel',
  templateUrl: './link-panel.component.html',
  styleUrls: ['./link-panel.component.css']
})
export class LinkPanelComponent implements OnInit {
  links: Link[] = []
  newLink: string = ""

  constructor(private linkservice: LinkService) { }

  ngOnInit(): void {
    this.linkservice.getLinks().subscribe((links) => this.links = links)
  }

  addLink(){
    var link: Link = {
      title: this.newLink,
      url: this.newLink,
      hide: false
    }
    this.linkservice.addLink(link).subscribe((link) => this.links.push(link))
    this.newLink = ""
  }

  deleteLink(link:Link){
    this.linkservice.deleteLink(link).subscribe(() => this.links = this.links.filter((l) => l.id !== link.id))
  }

  updateLink(link:Link){
    this.linkservice.updateLink(link).subscribe((link) => {
      for(let i = 0; i < this.links.length; i++){
        if(this.links[i].id == link.id){
          this.links[i] = link
          break
        }
      }
    })
  }
}
