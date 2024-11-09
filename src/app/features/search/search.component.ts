import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
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

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        filter((term): term is string => term !== null && term.length >= 3), 
        debounceTime(1000), 
        distinctUntilChanged()
      )
      // Update the service with debounced value
      .subscribe((term: string) => {
        this.searchService.setTerm(term);
      });
  }
}
