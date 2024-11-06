import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tv-show-tile',
  standalone: true,
  imports: [],
  templateUrl: './tvshow-tile.component.html',
  styleUrl: './tvshow-tile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TvshowTileComponent {
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() rating: number = 0;

  @Output() clickedItemEvent = new EventEmitter<string>();
  emitClick(id: string) {
    this.clickedItemEvent.emit(id)
  }
}