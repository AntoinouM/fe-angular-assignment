import { Component, Input, WritableSignal } from '@angular/core';
import { Hero } from '../../core/models/hero.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  @Input() data: any = {};

  ngOnChanges() {
    console.log(this.data)
  }

}
