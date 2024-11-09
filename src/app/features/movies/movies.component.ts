import { Component, input } from '@angular/core';
import { MediaCardComponent } from '../../shared/media-card/media-card.component';

@Component({
  selector: 'movies',
  standalone: true,
  imports: [MediaCardComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  topRated = input<any[]>([])
}
