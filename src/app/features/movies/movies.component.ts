import { Component, Input } from '@angular/core';
import { MovieTileComponent } from './movie-tile/movie-tile.component';

@Component({
  selector: 'movies',
  standalone: true,
  imports: [MovieTileComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  @Input() topRated: any[] = [];
}
