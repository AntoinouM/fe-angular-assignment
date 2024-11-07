import { NgClass, NgOptimizedImage } from '@angular/common';
import { RouterOutlet, RouterLink, ActivatedRoute } from '@angular/router';
import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgOptimizedImage, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isMobileMenuOpen: boolean = false;
  isSearchActive: boolean = false;
  query: string = '';

  inputElement = viewChild<ElementRef>('input');

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleSearch() {
    this.isMobileMenuOpen = false;
    this.isSearchActive = !this.isSearchActive;
    console.log(this.isSearchActive)
  }

}
