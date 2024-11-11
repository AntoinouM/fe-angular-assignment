import { Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { MediaCardComponent } from '../../shared/media-card/media-card.component';
import { SearchViewComponent } from '../search-view/search-view.component';
import { Router } from '@angular/router';
import { SearchService } from '../../core/services/search-service.service';
import { TmdbApiService } from '../../core/services/tmdb-api.service';
import { MatTableModule } from '@angular/material/table';
import { RatingComponent } from '../../shared/rating/rating.component';
import { YearPipe } from '../../shared/pipes/date-to-year.pipe';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-medias',
  standalone: true,
  imports: [MediaCardComponent, SearchViewComponent, MatTableModule, RatingComponent, YearPipe],
  templateUrl: './medias.component.html',
  styleUrl: './medias.component.scss',
})
export class MediasComponent implements OnInit {

  private router = inject(Router);
  private searchService = inject(SearchService);
  private api = inject(TmdbApiService);
  private destroyRef$ = inject(DestroyRef)

  constructor() {}

  topRated = input<any[]>([]);
  media = input<'tv' | 'movie'>('tv');
  displayedColumns: string[] = ['position', 'image', 'name', 'year', 'rating'];

  isSearchValid = signal<boolean>(false);
  searchResult = signal<any[]>([]);
  query = signal<string>('');

  ngOnInit() {
        this.searchService.search$
            .pipe(takeUntilDestroyed(this.destroyRef$))
            .subscribe((term) => {
              if (term.length >= 3 && !term.substring(0, 3).includes(' ')) {
                this.searchQuery(term);
                this.isSearchValid.set(true);
                this.query.set(term);
              } else {
                this.searchResult.set([]);
                this.isSearchValid.set(false);
                this.query.set('');
              }
            });
  }

  searchQuery(term: string) {
    this.api.search(this.media(), term)
      .pipe(takeUntilDestroyed(this.destroyRef$))
      .subscribe({
        next: ((response) => {
          this.searchResult.set(response.results);
        }),
        error: ((error) => {
          console.error('Error searching data:', error);
        })
      })
  }

  handleClickedMedia(id: number) {
    if (this.media() === 'movie') {
      this.router.navigate([`/movie/${id}`])
    } else {
      this.router.navigate([`/tvshow/${id}`])
    }
  }
}
