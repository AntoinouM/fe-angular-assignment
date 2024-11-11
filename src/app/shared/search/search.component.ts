import { Component, DestroyRef, inject, OnInit, output, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { SpinnerComponent } from '../spinner/spinner.component';
import { SearchService } from '../../core/services/search-service.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  private destroyRef$ = inject(DestroyRef)

  constructor() {}

  ngOnInit() {
    const lastSearchTerm = this.searchService.getLastSearchTerm();
    this.searchControl.setValue(lastSearchTerm);

    this.searchControl.valueChanges
      .pipe(
        takeUntilDestroyed(this.destroyRef$),
        filter((term): term is string => term !== null),
        tap((term)=> {
          if (term.length >= 3) this.isSearchLoading.set(true);
        }),
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
    this.searchService.setLastSearchTerm('');
    this.searchControl.setValue('');
  }
}
