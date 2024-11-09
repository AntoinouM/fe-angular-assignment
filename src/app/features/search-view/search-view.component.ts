import { Component, input } from '@angular/core';
import { MediaCardComponent } from '../../shared/media-card/media-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [MediaCardComponent],
  templateUrl: './search-view.component.html',
  styleUrl: './search-view.component.scss'
})
export class SearchViewComponent {

  constructor(private router: Router) {}

  searchResult = input<any[]>([]);
  media = input<string>('tv');

  handleClickedMedia(id: number) {
    if(this.media() === 'tv') {
      this.router.navigate([`/tvshow/${id}`])
    } else {
      this.router.navigate([`/movie/${id}`])
    }
  }
}
