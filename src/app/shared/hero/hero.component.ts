import { Component, input } from '@angular/core';
import { YearPipe } from '../pipes/date-to-year.pipe';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [YearPipe, RatingComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  data = input<any>({})

}
