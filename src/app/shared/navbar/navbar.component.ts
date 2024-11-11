import { NgOptimizedImage } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
