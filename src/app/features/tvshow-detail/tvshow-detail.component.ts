import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tvshow-detail',
  standalone: true,
  imports: [],
  templateUrl: './tvshow-detail.component.html',
  styleUrl: './tvshow-detail.component.scss'
})
export class TvshowDetailComponent {

  constructor(private route: ActivatedRoute) {}

  id: number | null = 0;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = +params.get('id')!;
    })
  }

}
