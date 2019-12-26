import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-one-movie-page',
  templateUrl: './one-movie-page.component.html',
  styleUrls: ['./one-movie-page.component.css']
})
export class OneMoviePageComponent implements OnInit {
  movie: object;
  similarMovies: [];
  movieId: number;
  constructor(private activatedRoute: ActivatedRoute,
              private apiService: ApiService) { }

  ngOnInit() {
    this.getId();
    this.getInfo();
    this.getSimilar();
  }

  getId(): Observable<any> {
    return this.movieId = this.activatedRoute.snapshot.params['id'];
  }

  getInfo() {
    this.apiService.getMoreInfo(this.movieId).subscribe(data => this.movie = data);
  }

  getSimilar() {
    this.apiService.getSimilar(this.movieId).subscribe(data => this.similarMovies = data['results']);
  }
}
