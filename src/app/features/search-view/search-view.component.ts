import { Component, inject, input } from '@angular/core';
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

  private router = inject(Router)

  constructor() {}

  searchResult = input<any[]>([]);
  media = input<string>('tv');
  query = input<string>('');

  handleClickedMedia(id: number) {
    if(this.media() === 'tv') {
      this.router.navigate([`/tvshow/${id}`])
    } else {
      this.router.navigate([`/movie/${id}`])
    }
  }
}
