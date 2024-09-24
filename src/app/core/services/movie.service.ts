import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = environment.apiBaseUrl;
  private apiKey = environment.movieApiKey;

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<any> {
    const url = `${this.apiUrl}/movie/popular?language=es-ES&region=ES&api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getUpcomingMovies(): Observable<any> {
    const url = `${this.apiUrl}/movie/upcoming?language=es-ES&region=ES&api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getTopRatedMovies(): Observable<any> {
    const url = `${this.apiUrl}/movie/top_rated?language=es-ES&region=ES&api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getMovieDetails(id: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
