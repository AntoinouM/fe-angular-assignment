import { Component, input, Input, WritableSignal } from '@angular/core';
import { Hero } from '../../core/models/hero.model';
import { YearPipe } from '../pipes/date-to-year.pipe';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [YearPipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  data = input<any>({})

}
