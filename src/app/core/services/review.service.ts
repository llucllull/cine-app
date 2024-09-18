import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = environment.apiBaseUrl;
  private apiKey = environment.movieApiKey;

  constructor(private http: HttpClient) { }

  getMovieReviews(movieId: number) {
    const url = `${this.apiUrl}/movies/${movieId}/reviews?language=en-US&api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getTVShowReviews(tvshowId: number) {
    const url = `${this.apiUrl}/tv/${tvshowId}/reviews?language=en-US&api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
