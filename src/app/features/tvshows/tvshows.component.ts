import { Component, Input } from '@angular/core';
import { TvshowTileComponent } from './tvshow-tile/tvshow-tile.component';

@Component({
  selector: 'tvshows',
  standalone: true,
  imports: [TvshowTileComponent],
  templateUrl: './tvshows.component.html',
  styleUrl: './tvshows.component.scss'
})
export class TvshowsComponent {

  @Input() topRated: any[] = [];
}