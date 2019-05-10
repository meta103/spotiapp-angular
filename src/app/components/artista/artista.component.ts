import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artista: any = {};

  loading: boolean;

  toptracks: any[] = [];

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe(params => {
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtista(id: string) {
    this.loading = true;

    this.spotify.getArtista(id)
      .subscribe(data => {
        this.artista = data;
        this.loading = false;
        console.log(data);
      });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
    .subscribe(data => {
      this.toptracks = data;

    });
  }


}
