import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  movies: object;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPopularMovies().subscribe((data) => this.movies = data['results']);
  }

}
