import { Component, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  
  isSearchLoading = signal<boolean>(false);
  query = signal<string>('')
  searchControl = new FormControl('');

  constructor() {
    this.initializeSearch();
  }

  initializeSearch() {
    this.searchControl.valueChanges
      .pipe(
        tap((value: string | null) => {
          this.isSearchLoading.set(!!value && value.length >= 3);
        }),
        filter((value): value is string => value !== null),
        debounceTime(1000),
        filter((value: string) => value.length >= 3),
        tap(() => {
          this.isSearchLoading.set(false);
        })
      )
      .subscribe((searchTerm) => {
        this.query.set(searchTerm);
      });
  }

}
