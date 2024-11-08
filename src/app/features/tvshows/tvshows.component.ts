import { Component, input } from '@angular/core';
import { MediaCardComponent } from '../../shared/media-card/media-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'tvshows',
  standalone: true,
  imports: [MediaCardComponent],
  templateUrl: './tvshows.component.html',
  styleUrl: './tvshows.component.scss'
})
export class TvshowsComponent {

  constructor(private router: Router) {}

  topRated = input<any[]>([])

  handleClickedMedia(id: number) {
        this.router.navigate([`/tvshow/${id}`])
  }
}