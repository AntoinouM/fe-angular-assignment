import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TitleComponent } from './shared/components/title/title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FE_Angular_Assignment';
}
