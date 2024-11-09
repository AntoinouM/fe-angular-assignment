import { Component, EventEmitter, input, Output } from '@angular/core';
import { YearPipe } from '../pipes/date-to-year.pipe';
import { ImagePathToUrl } from '../pipes/image-path-to-url.pipe';

@Component({
  selector: 'app-media-card',
  standalone: true,
  imports: [YearPipe, ImagePathToUrl],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.scss'
})
export class MediaCardComponent {

  imageSource = input<string>('');
  date = input<string>('');
  name = input<string>('');
  rating = input<number>(0);
  voteCount = input<number>(0);
  id = input<number>(0);
  
  @Output() clickedItemEvent = new EventEmitter<number>();

  emitClicked(id: number) {
    this.clickedItemEvent.emit(id)
  }
}

