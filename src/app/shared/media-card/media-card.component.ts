import { Component, input, output } from '@angular/core';
import { YearPipe } from '../pipes/date-to-year.pipe';

@Component({
  selector: 'app-media-card',
  standalone: true,
  imports: [YearPipe],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.scss'
})
export class MediaCardComponent {

  isDetailed = input<boolean>(true);
  imageSource = input<string>('');
  date = input<string>('');
  name = input<string>('');
  id = input<number>(0);

  clickedItemEvent = output<number>();

  emitClicked(id: number) {
    this.clickedItemEvent.emit(id)
  }
}

