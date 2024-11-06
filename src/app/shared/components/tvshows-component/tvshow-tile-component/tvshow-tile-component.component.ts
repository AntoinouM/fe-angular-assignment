import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tvshow-tile-component',
  standalone: true,
  imports: [],
  templateUrl: './tvshow-tile-component.component.html',
  styleUrl: './tvshow-tile-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TvshowTileComponentComponent {
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() rating: number = 0;

  @Output() clickedItemEvent = new EventEmitter<string>();
  emitClick(id: string) {
    this.clickedItemEvent.emit(id)
  }
}
