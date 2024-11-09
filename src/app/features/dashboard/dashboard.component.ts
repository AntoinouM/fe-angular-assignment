import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TvshowsComponent } from "../tvshows/tvshows.component";
import { TmdbApiService } from '../../core/services/tmdb-api.service';
import { MoviesComponent } from '../movies/movies.component';
import { SearchComponent } from '../../shared/search/search.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { SearchService } from '../../core/services/search-service.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTabsModule, TvshowsComponent, MoviesComponent, SearchComponent, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {

  topRatedMovies: WritableSignal<any[]> = signal([]);
  topRatedTvShows: WritableSignal<any[]> = signal([]);
  isSearchEmpty = signal<boolean>(true);

  constructor(private api: TmdbApiService, private searchService: SearchService) {}

  ngOnInit() {
    this.loadTopRated();
    this.searchService.isEmpty$.subscribe(isEmpty => {
      this.isSearchEmpty.set(isEmpty);
    });
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
