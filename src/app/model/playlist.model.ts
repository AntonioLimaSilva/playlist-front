export interface Playlist {
  name: string;
  description: string;
  songs: Song[];
}

export interface Song {
  title: string;
  artist: string;
  year: string;
  gender: string;
}
