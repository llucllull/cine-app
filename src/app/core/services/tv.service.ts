import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TvService {
  private apiUrl = environment.apiBaseUrl;
  private apiKey = environment.movieApiKey;

  constructor(private http: HttpClient) { }

  getPopularTVShows(): Observable<any> {
    const url = `${this.apiUrl}/tv/popular?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getTopRatedTVShows(): Observable<any> {
    const url = `${this.apiUrl}/tv/top_rated?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getTVShowDetails(id: number): Observable<any> {
    const url = `${this.apiUrl}/tv/${id}?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
