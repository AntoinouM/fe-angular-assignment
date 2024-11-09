import { Component, input } from '@angular/core';
import { MediaCardComponent } from '../../shared/media-card/media-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'movies',
  standalone: true,
  imports: [MediaCardComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  constructor(private router: Router) {}

  topRated = input<any[]>([])

  handleClickedMedia(id: number) {
        this.router.navigate([`/movie/${id}`])
  }
}
