import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { Link } from '../Link';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private apiUrl = '/links'

  constructor(private http: HttpClient) { }

  getLinks(): Observable<Link[]>{
    return this.http.get<Link[]>(this.apiUrl)
  }

  deleteLink(link: Link): Observable<Link>{
    const url = `${this.apiUrl}/${link.id}`
    return this.http.delete<Link>(url)
  }

  updateLink(link: Link): Observable<Link>{
    const url = `${this.apiUrl}/${link.id}`
    return this.http.put<Link>(url, link, httpOptions)
  }

  addLink(link: Link): Observable<Link>{
    return this.http.post<Link>(this.apiUrl, link, httpOptions)
  }
}
