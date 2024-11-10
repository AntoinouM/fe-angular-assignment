import { Component, input, OnInit, signal } from '@angular/core';
import { MediaCardComponent } from '../../shared/media-card/media-card.component';
import { SearchViewComponent } from '../search-view/search-view.component';
import { Router } from '@angular/router';
import { SearchService } from '../../core/services/search-service.service';
import { TmdbApiService } from '../../core/services/tmdb-api.service';
import { MatTableModule } from '@angular/material/table';
import { RatingComponent } from '../../shared/rating/rating.component';
import { YearPipe } from '../../shared/pipes/date-to-year.pipe';

@Component({
  selector: 'app-medias',
  standalone: true,
  imports: [MediaCardComponent, SearchViewComponent, MatTableModule, RatingComponent, YearPipe],
  templateUrl: './medias.component.html',
  styleUrl: './medias.component.scss',
})
export class MediasComponent implements OnInit {

  constructor(private router: Router, private searchService: SearchService, private api: TmdbApiService) {}
  
  topRated = input<any[]>([]);
  isSearchEmpty = input<boolean>(true);
  media = input<'tv' | 'movie'>('tv');
  displayedColumns: string[] = ['position', 'image', 'name', 'year', 'rating'];

  searchResult = signal<any[]>([]);

  ngOnInit() {
        this.searchService.search$.subscribe((term) => {
          if (term) {
            this.searchQuery(term);
          } else {
            this.searchResult.set([]);
          }
        });
  }

  searchQuery(term: string) {
    this.api.search(this.media(), term).subscribe({
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
