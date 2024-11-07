import { NgClass, NgOptimizedImage } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, filter, tap } from 'rxjs';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgOptimizedImage, NgClass, ReactiveFormsModule, SpinnerComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isMobileMenuOpen: boolean = false;
  isSearchActive: boolean = false;
  isSearchLoading: boolean = false;
  query: string = '';
  searchControl = new FormControl('');

  constructor() {
    this.initializeSearch();
  }

  initializeSearch() {
    this.searchControl.valueChanges
      .pipe(
        tap((value: string | null) => {
          this.isSearchLoading = !!value && value.length >= 3;
        }),
        filter((value): value is string => value !== null),
        debounceTime(1000),
        filter((value: string) => value.length >= 3),
        tap(() => {
          this.isSearchLoading = false;
        })
      )
      .subscribe((searchTerm) => {
        this.query = searchTerm;
        this.performSearch(searchTerm);
      });
  }

  performSearch(searchTerm: string) {
    console.log('Search triggered with:', searchTerm);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleSearch() {
    this.isMobileMenuOpen = false;
    this.isSearchActive = !this.isSearchActive;
    console.log(this.isSearchActive)
  }

}
