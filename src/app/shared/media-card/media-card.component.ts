import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-media-card',
  standalone: true,
  imports: [],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.scss'
})
export class MediaCardComponent {

  @Input() imageSource: string = '';
  @Input() date: string = '';
  @Input() name: string = '';
  @Input() rating: number = 0;
  @Input() voteCount: number = 0;

  get year(): number | null {
    return this.date?.length >= 4 ? new Date(this.date).getFullYear() : null;
  }
}
