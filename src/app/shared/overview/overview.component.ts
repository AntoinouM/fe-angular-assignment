import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

  media = input<string>('');
  data = input<any>({});
}
