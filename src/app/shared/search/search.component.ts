import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchControl = new FormControl('');

  constructor() {
    this.initializeSearch();
  }

  initializeSearch() {
    this.searchControl.valueChanges
      .pipe(
        filter((value): value is string => value !== null),
        debounceTime(1000),
        filter((value: string) => value.length >= 3)
      )
      .subscribe((searchTerm) => {
        this.performSearch(searchTerm);
      });
  }

  performSearch(searchTerm: string) {
    console.log('Search triggered with:', searchTerm);
  }
}
