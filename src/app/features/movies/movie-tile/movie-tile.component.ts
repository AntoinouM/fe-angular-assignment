import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Movie } from '../../../core/models/movie.model';

@Component({
  selector: 'movie-tile',
  standalone: true,
  imports: [],
  templateUrl: './movie-tile.component.html',
  styleUrl: './movie-tile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieTileComponent {
  @Input() movie: Movie = {
    adult: false,
    backdrop_path: '',
    genre_ids: [],
    id: 0,
    imgSrc: '',
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    rating: 0,
    release_date: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
    imageSrc: ''
  }
}
