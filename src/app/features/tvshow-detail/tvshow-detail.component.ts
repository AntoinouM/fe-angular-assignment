import { Component, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TmdbApiService } from '../../core/services/tmdb-api.service';
import { HeroComponent } from '../../shared/hero/hero.component';
import { Hero } from '../../core/models/hero.model';

@Component({
  selector: 'app-tvshow-detail',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './tvshow-detail.component.html',
  styleUrl: './tvshow-detail.component.scss'
})
export class TvshowDetailComponent {

  media: 'tv' = 'tv';
  id!: number;
  data: WritableSignal<any> = signal({});
  cast_data: WritableSignal<any> = signal({});
  hero: WritableSignal<Hero> = signal({
    title: '',
    rating: 0,
    vote_count: 0,
    season_count: null,
    imageSource: '',
    date: 0,
    description: '',
  })

  
  constructor(private route: ActivatedRoute, private api: TmdbApiService) {}

   ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.loadData(this.id)
    });
  }

  loadData(id: number) {
    this.fetchData('tv', id);
    this.fetchCastInfo('tv', id)
  }

  fetchData(mediaType: string, id: number): void {
    this.api.getTvShow(mediaType, id).subscribe({
      next: (response) => {
        this.data.update( () => response);
        this.hero.update( () => this.generateHero(response));
      },
      error: (error) => {
        console.error('Error fetching configuration data:', error);
      }
    })
  }

  fetchCastInfo(mediaType: string, id: number): void {
    this.api.getCredits(mediaType, id).subscribe({
      next: (response) => {
        this.cast_data.update(() => response);
      },
      error: (error) => {
        console.error('Error fetching configuration data:', error);
      }
    })
  }

  generateHero(data: any): Hero {
    return {
      title: data.name,
      rating: Math.floor(data.vote_average * 100) / 100,
      vote_count: data.vote_count,
      season_count: data.number_of_seasons,
      imageSource: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
      date: new Date(data.first_air_date).getFullYear(),
      description: data.overview,
    }
  }

}
