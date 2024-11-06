import { Component } from '@angular/core';
import { Media } from '../../../core/models/media.model';

@Component({
  selector: 'app-medias-component',
  standalone: true,
  imports: [],
  templateUrl: './medias-component.component.html',
  styleUrl: './medias-component.component.scss'
})
export class MediasComponentComponent {
  dataTest: Media[] = [
    {
      id: '1',
      title: 'Movie 1',
      description: 'Voluptate dolor fugiat incididunt Lorem eiusmod adipisicing ipsum excepteur cupidatat culpa.',
      rating: 4
    },
    {
      id: '2',
      title: 'Movie 2',
      description: 'Voluptate dolor fugiat incididunt Lorem eiusmod adipisicing ipsum excepteur cupidatat culpa.',
      rating: 3
    },
    {
      id: '3',
      title: 'Movie 3',
      description: 'Voluptate dolor fugiat incididunt Lorem eiusmod adipisicing ipsum excepteur cupidatat culpa.',
      rating: 5
    },
    {
      id: '4',
      title: 'Movie 4',
      description: 'Voluptate dolor fugiat incididunt Lorem eiusmod adipisicing ipsum excepteur cupidatat culpa.',
      rating: 4
    },
    {
      id: '5',
      title: 'Movie 5',
      description: 'Voluptate dolor fugiat incididunt Lorem eiusmod adipisicing ipsum excepteur cupidatat culpa.',
      rating: 1
    },
    {
      id: '6',
      title: 'Movie 6',
      description: 'Voluptate dolor fugiat incididunt Lorem eiusmod adipisicing ipsum excepteur cupidatat culpa.',
      rating: 2
    },
    {
      id: '7',
      title: 'Movie 7',
      description: 'Voluptate dolor fugiat incididunt Lorem eiusmod adipisicing ipsum excepteur cupidatat culpa.',
      rating: 5
    },
    {
      id: '8',
      title: 'Movie 8',
      description: 'Voluptate dolor fugiat incididunt Lorem eiusmod adipisicing ipsum excepteur cupidatat culpa.',
      rating: 2
    },
    {
      id: '9',
      title: 'Movie 9',
      description: 'Voluptate dolor fugiat incididunt Lorem eiusmod adipisicing ipsum excepteur cupidatat culpa.',
      rating: 4
    },
    {
      id: '10',
      title: 'Movie 10',
      description: 'Voluptate dolor fugiat incididunt Lorem eiusmod adipisicing ipsum excepteur cupidatat culpa.',
      rating: 4
    }
  ]

  
}
