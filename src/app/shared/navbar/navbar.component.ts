import { NgOptimizedImage } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, tap } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
