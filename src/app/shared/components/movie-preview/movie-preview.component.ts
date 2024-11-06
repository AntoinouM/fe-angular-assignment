import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TmdbApiService } from '../../../core/services/tmdb-api.service';

@Component({
  selector: 'app-movie-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.scss']
})
export class MoviePreviewComponent implements OnInit {
  configurationData: any;

  private tmdbService = inject(TmdbApiService);

  ngOnInit(): void {
    this.tmdbService.getConfiguration().subscribe({
      next: (data) => {
        this.configurationData = data;
        console.log('Configuration data:', data);
      },
      error: (error) => {
        console.error('Error fetching configuration data:', error);
      },
      complete: () => {
        console.log('Data fetch complete.');
      }
    });
  }
}
