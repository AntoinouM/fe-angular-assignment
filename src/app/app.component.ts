import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { SearchComponent } from './shared/components/search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FE_Angular_Assignment';
}
