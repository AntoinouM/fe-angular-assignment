import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { SpinnerComponent } from '../spinner/spinner.component';
import { SearchService } from '../../core/services/search-service.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SpinnerComponent, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})

export class SearchComponent implements OnInit {

  searchControl = new FormControl('');
  isSearchLoading = signal<boolean>(false);

  private searchService = inject(SearchService)
  
  constructor() {}

  ngOnInit() {
    const lastSearchTerm = this.searchService.getLastSearchTerm();
    this.searchControl.setValue(lastSearchTerm);

    this.searchControl.valueChanges.subscribe((term: string | null) => {
      this.searchService.checkEmpty(term);
    });

    this.searchControl.valueChanges
      .pipe(
        filter((term): term is string => term !== null && term.length >= 3),
        tap(()=> {this.isSearchLoading.set(true);}), 
        debounceTime(1000), 
        tap(()=> {this.isSearchLoading.set(false)}), 
      )
      // Update the service with debounced value
      .subscribe((term: string) => {
        this.searchService.setTerm(term);
      });
  }

  clearField(inputField: HTMLInputElement) {
    inputField.value = '';
    this.searchService.checkEmpty(inputField.value)
    this.searchService.setLastSearchTerm('');
  }
}
