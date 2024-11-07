import { Component, OnInit } from '@angular/core';
import { TmdbApiService } from '../../../core/services/tmdb-api.service';

@Component({
  selector: 'app-movie-preview',
  standalone: true,
  imports: [],
  templateUrl: './movie-preview.component.html',
  styleUrl: './movie-preview.component.scss'
})
export class MoviePreviewComponent implements OnInit {

  constructor(private api: TmdbApiService) {}

  topRateMovies: any = [];

  ngOnInit(): void {
    this.fetchTopRated()
  }

  async fetchTopRated(): Promise<void> {
    this.api.getTopRated(1, 'movie').subscribe({
      next: (data) => {
        console.log('Configuration data:', data.results);
        this.topRateMovies = data.results;
      },
      error: (error) => {
        console.error('Error fetching configuration data:', error);
      },
      complete: () => {
        console.log('Data fetch complete.');
      }
    })
  }

}
