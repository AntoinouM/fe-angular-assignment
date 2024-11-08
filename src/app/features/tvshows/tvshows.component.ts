import { Component, Input } from '@angular/core';
import { MediaCardComponent } from '../../shared/media-card/media-card.component';

@Component({
  selector: 'tvshows',
  standalone: true,
  imports: [MediaCardComponent],
  templateUrl: './tvshows.component.html',
  styleUrl: './tvshows.component.scss'
})
export class TvshowsComponent {

  @Input() topRated: any[] = [];

  handleClickedMedia(id: number) {
    console.log(id)
  }
}