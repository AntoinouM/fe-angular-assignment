import { Component, input, OnInit, signal } from '@angular/core';
import { MediaCardComponent } from '../../shared/media-card/media-card.component';
import { Router } from '@angular/router';
import { SearchService } from '../../core/services/search-service.service';
import { TmdbApiService } from '../../core/services/tmdb-api.service';
import { SearchViewComponent } from '../search-view/search-view.component';

@Component({
  selector: 'movies',
  standalone: true,
  imports: [MediaCardComponent, SearchViewComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {

  constructor(private router: Router, private searchService: SearchService, private api: TmdbApiService) {}
  
  topRated = input<any[]>([]);
  isSearchEmpty = input<boolean>(true);
  searchResult = signal<any[]>([])
  media: string = 'movie';

  ngOnInit() {
        this.searchService.resetSearch$.subscribe((bool) => {
          if (bool) {
            this.searchResult.set([]);
          }
        })
        this.searchService.search$.subscribe((term) => {
          if (term) {
            this.searchQuery(term);
          }
        });
  }

  searchQuery(term: string) {
    this.api.search(this.media, term).subscribe({
      next: ((response) => {
        this.searchResult.set(response.results);
      }),
      error: ((error) => {
        console.error('Error searching data:', error);
      })
    })
  }

  handleClickedMedia(id: number) {
        this.router.navigate([`/movie/${id}`])
  }
}
