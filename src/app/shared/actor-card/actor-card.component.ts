import { Component, input } from '@angular/core';
import { Actor } from '../../core/models/actor.model';

@Component({
  selector: 'app-actor-card',
  standalone: true,
  imports: [],
  templateUrl: './actor-card.component.html',
  styleUrl: './actor-card.component.scss'
})
export class ActorCardComponent {

  actorData = input<Actor>({
    name: '',
    pictureUrl: '',
    character: ''
  })
}
