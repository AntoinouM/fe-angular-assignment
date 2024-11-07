import { Component } from '@angular/core';
import { Media } from '../../../core/models/media.model';
import { TvshowTileComponent } from './tvshow-tile/tvshow-tile.component';
import { Router } from '@angular/router';

@Component({
  selector: 'tvshows',
  standalone: true,
  imports: [TvshowTileComponent],
  templateUrl: './tvshows.component.html',
  styleUrl: './tvshows.component.scss'
})
export class TvshowsComponent {

  constructor(private router: Router) {}

  consoleEvent(id: string) {
    // this.router.navigate([`/${id}`], {
    //   state: {
    //     data: this.dataTest[+id - 1],
    //   }
    // });
  }
}