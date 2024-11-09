import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-media-card',
  standalone: true,
  imports: [],
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

  get year(): number | null {
    return this.date().length >= 4 ? new Date(this.date()).getFullYear() : null;
  }

  @Output() clickedItemEvent = new EventEmitter<number>();

  emitClicked(id: number) {
    this.clickedItemEvent.emit(id)
  }
}
function year() {
  throw new Error('Function not implemented.');
}

