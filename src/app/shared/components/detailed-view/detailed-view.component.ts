import { Component, input } from '@angular/core';
import { Media } from '../../../core/models/media.model';

@Component({
  selector: 'app-detailed-view',
  standalone: true,
  imports: [],
  templateUrl: './detailed-view.component.html',
  styleUrl: './detailed-view.component.scss'
})
export class DetailedViewComponent {
  mediaId = input<string>();
  media: Media = {
    id: history.state.data.id,
    title: history.state.data.title,
    description: history.state.data.description,
    rating: history.state.data.rating,
  };
}
