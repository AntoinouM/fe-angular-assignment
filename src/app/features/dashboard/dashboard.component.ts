import { Component, signal, WritableSignal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TvshowsComponent } from "../tvshows/tvshows.component";
import { TmdbApiService } from '../../core/services/tmdb-api.service';
import { MoviesComponent } from '../movies/movies.component';
import { response } from 'express';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTabsModule, TvshowsComponent, MoviesComponent, SearchComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  topRatedMovies: WritableSignal<any[]> = signal([]);
  topRatedTvShows: WritableSignal<any[]> = signal([]);

  constructor(private api: TmdbApiService) {}

  ngOnInit() {
    this.loadTopRated();
  }

  loadTopRated() {
    this.fetchTopRated('tv', this.topRatedTvShows);
    this.fetchTopRated('movie', this.topRatedMovies);
  }

  fetchTopRated(mediaType: string, array: WritableSignal<any[]>): void {
    this.api.getTopRated(1, mediaType).subscribe({
      next: (response) => {
        const tempArray = response.results.map((item: any) => ({
            imageSrc: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : null,
            ...item,
            rating: Math.round(item.vote_average * 100) / 100,
        }));
        array.set(tempArray.slice(0, 10));
      },
      error: (error) => {
        console.error('Error fetching configuration data:', error);
      },
      complete: () => {
      }
    })
  }
}
