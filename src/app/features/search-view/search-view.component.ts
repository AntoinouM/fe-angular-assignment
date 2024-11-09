import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [],
  templateUrl: './search-view.component.html',
  styleUrl: './search-view.component.scss'
})
export class SearchViewComponent {

  searchResult = signal<any>(undefined);
}
