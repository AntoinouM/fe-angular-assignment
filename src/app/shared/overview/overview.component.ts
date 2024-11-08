import { Component, input } from '@angular/core';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

  media = input<string>('');
  data = input<any>({});
  dataCast = input<any>({});

  ngOnChanges() {
    console.log(this.data())
    //console.log(this.dataCast())
  }
}
