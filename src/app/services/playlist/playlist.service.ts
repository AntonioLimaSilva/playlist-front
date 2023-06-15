import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  playlistUrl: string;

  constructor(
    public http: HttpClient
  ) {
    this.playlistUrl = `${environment.apiUrl}/playlist`;
  }

  add(playlist: any): Observable<any> {
    return this.http.post<any>(`${this.playlistUrl}/lists`, playlist, httpOptions);
  }

  list(): Observable<any[]> {
    return this.http.get<any[]>(`${this.playlistUrl}/lists`, httpOptions);
  }

  listDescription(listName: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.playlistUrl}/lists/${listName}`, httpOptions);
  }

  remove(listName: string): Observable<any> {
    return this.http.delete<any[]>(`${this.playlistUrl}/list/${listName}`, httpOptions);
  }
}
