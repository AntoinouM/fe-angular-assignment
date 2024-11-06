import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-media-tile-component',
  standalone: true,
  imports: [],
  templateUrl: './media-tile-component.component.html',
  styleUrl: './media-tile-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaTileComponentComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() rating: number = 0;
}
