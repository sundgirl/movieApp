import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  apiKey = '153870fc19a124d38f138fd1a45c83d4';

  public getPopularMovies() {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`);
  }

  public getMoreInfo(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US`);
  }

  public getSimilar(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${this.apiKey}&language=en-US&page=1`);
  }
}

