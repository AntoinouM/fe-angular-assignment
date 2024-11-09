import { Component, input, OnInit, signal } from '@angular/core';
import { MediaCardComponent } from '../../shared/media-card/media-card.component';
import { Router } from '@angular/router';
import { SearchService } from '../../core/services/search-service.service';
import { TmdbApiService } from '../../core/services/tmdb-api.service';

@Component({
  selector: 'tvshows',
  standalone: true,
  imports: [MediaCardComponent],
  templateUrl: './tvshows.component.html',
  styleUrl: './tvshows.component.scss'
})
export class TvshowsComponent implements OnInit {

  constructor(private router: Router, private searchService: SearchService, private api: TmdbApiService) {}
  
  topRated = input<any[]>([]);
  isSearchActive = signal<boolean>(false);
  media: string = 'tv';

  ngOnInit() {
        // Subscribe directly to debounced search term changes
        this.searchService.search$.subscribe((term) => {
          if (term) {
            this.searchQuery(term);  // Call the search API with the updated term
          }
        });
  }

  searchQuery(term: string) {
    console.log(term)
    this.api.search(this.media, term).subscribe({
      next: ((response) => {
        console.log(response)
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