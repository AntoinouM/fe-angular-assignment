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

  constructor(private data: TmdbApiService) {}

  ngOnInit(): void {
    this.getExampleData();
  }

  exampleData: any;
  getExampleData() {
    this.data.getData().subscribe({
      next: (data) => {
        this.exampleData = data;
        console.log('Configuration data:', data);
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
