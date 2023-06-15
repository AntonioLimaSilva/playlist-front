import {Component, OnInit} from "@angular/core";
import {PlaylistService} from "../../../services/playlist/playlist.service";
import {Playlist} from "../../../model/playlist.model";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css'],
})
export class PlaylistListComponent implements OnInit {

  playlists: Playlist[] = []

  constructor(private playlistService: PlaylistService) {

  }

  ngOnInit(): void {
    this.listAll();
  }

  remove(play: Playlist) {
    this.playlistService.remove(play.name).subscribe({
      next: _ => {
        this.listAll();
      }
    })
  }

  public listAll() {
    this.playlistService.list().subscribe( {
      next: value => {
        this.playlists = value
      }
    })
  }

  public listByName(name: string) {
    this.playlistService.listDescription(name).subscribe({
      next: value => {
        this.playlists = value
      }
    })
  }

  findByNameOrAll(event: any) {
    if (event.target.value) {
      this.listByName(event.target.value)
    } else {
      this.listAll();
    }
  }
}
