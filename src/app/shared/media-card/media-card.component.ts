import { Component, EventEmitter, input, output, Output } from '@angular/core';
import { YearPipe } from '../pipes/date-to-year.pipe';
import { ImagePathToUrl } from '../pipes/image-path-to-url.pipe';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-media-card',
  standalone: true,
  imports: [YearPipe, ImagePathToUrl, RatingComponent],
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
  
  clickedItemEvent = output<number>();

  emitClicked(id: number) {
    this.clickedItemEvent.emit(id)
  }
}

