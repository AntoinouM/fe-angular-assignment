import { Component, input, Input, WritableSignal } from '@angular/core';
import { Hero } from '../../core/models/hero.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  data = input<any>({})
  get year(): number | null {
    return this.data().length >= 4 ? new Date(this.data().date).getFullYear() : null;
  }

  ngOnChanges() {
    console.log(this.data())
  }

}
