import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../core/services/movie.service";
import {TvService} from "../../core/services/tv.service";
import {Movie} from "../../core/models/movie.model";
import {TvShow} from "../../core/models/tv-show.model";
import {CommonModule, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  popularTvShows: TvShow[] = [];
  onTheAirTvShows: TvShow[] = [];

  currentSlide = 0;

  constructor(private movieService: MovieService, private tvService: TvService) {}

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe({
      next: (data) => {
        this.popularMovies = data.results;
      },
      error: (error) => {
        console.error('Error fetching movies:', error);
      },
      complete: () => {
        console.log('Movies fetching complete');
      }
    });
    this.movieService.getUpcomingMovies().subscribe({
      next: (data) => {
        this.upcomingMovies = data.results;
      },
      error: (error) => {
        console.error('Error fetching movies:', error);
      },
      complete: () => {
        console.log('Movies fetching complete');
      }
    });
    this.tvService.getPopularTVShows().subscribe({
      next: (data) => {
        this.popularTvShows = data.results;
      },
      error: (error) => {
        console.error('Error fetching tv shows:', error);
      },
      complete: () => {
        console.log('TV shows fetching complete');
      }
    });
    this.tvService.getOnTheAirTVShows().subscribe({
      next: (data) => {
        this.onTheAirTvShows = data.results.slice(0, 4);
      },
      error: (error) => {
        console.error('Error fetching tv shows:', error);
      },
      complete: () => {
        console.log('TV shows fetching complete');
      }
    });
    this.startAutoSlide();
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide === 0) ? this.upcomingMovies.length - 1 : this.currentSlide - 1;
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide === this.upcomingMovies.length - 1) ? 0 : this.currentSlide + 1;
  }

  startAutoSlide(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Cambiar slide cada 5 segundos
  }

  getPosterUrl(posterPath: string): string {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    const size = 'w780';
    return `${baseUrl}${size}${posterPath}`;
  }

}
