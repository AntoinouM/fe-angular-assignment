import { Component, input, OnInit, signal } from '@angular/core';
import { MediaCardComponent } from '../../shared/media-card/media-card.component';
import { Router } from '@angular/router';
import { SearchService } from '../../core/services/search-service.service';
import { TmdbApiService } from '../../core/services/tmdb-api.service';
import { SearchViewComponent } from '../search-view/search-view.component';

@Component({
  selector: 'tvshows',
  standalone: true,
  imports: [MediaCardComponent, SearchViewComponent],
  templateUrl: './tvshows.component.html',
  styleUrl: './tvshows.component.scss'
})
export class TvshowsComponent implements OnInit {

  constructor(private router: Router, private searchService: SearchService, private api: TmdbApiService) {}
  
  topRated = input<any[]>([]);
  isSearchEmpty = input<boolean>(true);
  isSearchActive = signal<boolean>(false);
  searchResult = signal<any[]>([])
  media: string = 'tv';

  ngOnInit() {
        this.searchService.resetSearch$.subscribe((bool) => {
          if (bool) {
            this.searchResult.set([]);
          }
        })
        this.searchService.search$.subscribe((term) => {
          console.log(term)
          if (term) {
            this.searchQuery(term);
          }
        });
  }

  ngOnChanges() {
    console.log(this.isSearchActive())
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
        this.router.navigate([`/tvshow/${id}`])
  }
}