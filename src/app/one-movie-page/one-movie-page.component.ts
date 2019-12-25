import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ApiService } from '../api.service';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
@Component({
  selector: 'app-one-movie-page',
  templateUrl: './one-movie-page.component.html',
  styleUrls: ['./one-movie-page.component.css']
})
export class OneMoviePageComponent implements OnInit {
  movie: object;
  movieId: number;
  constructor(private activatedRoute: ActivatedRoute,
              private apiService: ApiService) { }

  ngOnInit() {
    this.getId();
    this.getInfo();
  }

  getId() {
    return this.movieId = this.activatedRoute.snapshot.params['id'];
  }

  getInfo(): Observable<any> {
    this.apiService.getMoreInfo(this.movieId).subscribe(data => {
      console.log(data);
      this.movie = data;
      });
    return of(this.movie).pipe(delay(3000));
  }

}
