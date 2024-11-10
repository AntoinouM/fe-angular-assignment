import { Component, DestroyRef, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TmdbApiService } from '../../core/services/tmdb-api.service';
import { SearchComponent } from '../../shared/search/search.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { SearchService } from '../../core/services/search-service.service';
import { MediasComponent } from '../medias/medias.component';
import { RatingComponent } from '../../shared/rating/rating.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTabsModule, SearchComponent, NavbarComponent, MediasComponent, RatingComponent],
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

  mediaType = signal<'tv' | 'movie'>('tv');
  mediaTypeArray: ('tv' | 'movie')[] = ['tv', 'movie']

  private searchService = inject(SearchService);
  private api = inject(TmdbApiService);
  private destroyRef$ = inject(DestroyRef)

  constructor() {}


  ngOnInit() {
    this.loadTopRated();
    this.searchService.isEmpty$
    .pipe(takeUntilDestroyed(this.destroyRef$))
    .subscribe(isEmpty => {
      this.isSearchEmpty.set(isEmpty);
    });
  }

  loadTopRated() {
    this.fetchTopRated('tv', this.topRatedTvShows);
    this.fetchTopRated('movie', this.topRatedMovies);
  }

  fetchTopRated(mediaType: string, array: WritableSignal<any[]>): void {
    this.api.getTopRated(1, mediaType)
    .pipe(takeUntilDestroyed(this.destroyRef$))
    .subscribe({
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

  handleTabChange(index: number | null) {
    console.log(index)
  }
}
