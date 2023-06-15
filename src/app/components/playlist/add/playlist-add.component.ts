import {Component, OnInit} from "@angular/core";
import {PlaylistService} from "../../../services/playlist/playlist.service";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist-add.component.html',
  styleUrls: ['./playlist-add.component.css'],
})
export class PlaylistAddComponent implements OnInit {

  playlistForm!: FormGroup;

  constructor(private fb: FormBuilder, private playlistService: PlaylistService) {

    this.playlistForm = this.fb.group({
      id: [''],
      name: ['', Validators.compose(
        [Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      description: ['', Validators.compose(
        [Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      songs: this.fb.array([
        this.fb.group({
          title: ['', [Validators.required]],
          artist: ['', [Validators.required]],
          year: ['', [Validators.required]],
          gender: ['', [Validators.required]]
        })
      ]),
    });
  }

  ngOnInit(): void {
  }

  addMoreSongOrRemove(index: number) {
    if (index == 0) {
      this.songs.push(this.fb.group({
        title: ['', [Validators.required]],
        artist: ['', [Validators.required]],
        year: ['', [Validators.required]],
        gender: ['', [Validators.required]]
      }));
    } else {
      this.songs.removeAt(this.songs.value.indexOf(index));
    }
  }

  submitPlaylist(): void {
    this.playlistService.add(this.playlistForm.value).subscribe((resp: any) => {
      this.playlistForm.reset()
    })

  }

  get songs() {
    return this.playlistForm.get('songs') as FormArray;
  }

}
