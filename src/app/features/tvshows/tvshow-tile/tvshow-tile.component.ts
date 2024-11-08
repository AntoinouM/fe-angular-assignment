import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TvShow } from '../../../core/models/tvShow.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'tv-show-tile',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './tvshow-tile.component.html',
  styleUrl: './tvshow-tile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TvshowTileComponent {

  @Input() show: TvShow = {
    adult: false,
    backdrop_path: '',
    first_air_date: '',
    genre_ids: [],
    id: 0,
    name: '',
    origin_country: [],
    original_language: '',
    original_name: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    vote_average: 0,
    vote_count: 0,
    imageSrc: '',
    rating: 0
  };

  @Output() clickedItemEvent = new EventEmitter<string>();
  emitClick(id: number) {
    this.clickedItemEvent.emit(id.toString())
  }
}