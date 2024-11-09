import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RuntimePipe } from '../pipes/runtime.pipe';
import { ArrayToListPipe } from '../pipes/array-to-list.pipe';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [DatePipe, DecimalPipe, RuntimePipe, ArrayToListPipe],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

  media = input<string>('');
  data = input<any>({});
}
