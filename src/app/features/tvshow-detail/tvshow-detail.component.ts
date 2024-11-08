import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbApiService } from '../../core/services/tmdb-api.service';

@Component({
  selector: 'app-tvshow-detail',
  standalone: true,
  imports: [],
  templateUrl: './tvshow-detail.component.html',
  styleUrl: './tvshow-detail.component.scss'
})
export class TvshowDetailComponent {

  constructor(private route: ActivatedRoute, private api: TmdbApiService) {}

  id: number | null = 0;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = +params.get('id')!;
    })
    this.loadData()
  }

  loadData() {
    this.fetchData('tv', this.id!);
    this.fetchCastInfo('tv', this.id!)
  }

  fetchData(mediaType: string, id: number): void {
    this.api.getTvShow(mediaType, id).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error) => {
        console.error('Error fetching configuration data:', error);
      },
      complete: () => {
      }
    })
  }

  fetchCastInfo(mediaType: string, id: number): void {
    this.api.getCredits(mediaType, id).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error) => {
        console.error('Error fetching configuration data:', error);
      },
      complete: () => {
      }
    })
  }

}
