import { Component, signal, WritableSignal } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { TmdbApiService } from '../../core/services/tmdb-api.service';
import { HeroComponent } from '../../shared/hero/hero.component';
import { Hero } from '../../core/models/hero.model';
import { OverviewComponent } from '../../shared/overview/overview.component';
import { Actor } from '../../core/models/actor.model';
import { animate, style, transition, trigger } from '@angular/animations';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { ActorCardComponent } from '../../shared/actor-card/actor-card.component';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [HeroComponent, OverviewComponent, CarouselComponent, ActorCardComponent],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class MovieDetailComponent {
  media: string = 'movie';
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
  cast: WritableSignal<Actor[]> = signal([])

  
  constructor(private route: ActivatedRoute, private api: TmdbApiService, private location: Location) {}

   ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.loadData(this.id)
    });
  }

  loadData(id: number) {
    this.fetchData(this.media, id);
    this.fetchCastInfo(this.media, id)
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
        this.cast_data.update(() => response.cast);
        this.cast_data().forEach((actor: any) => {
          this.cast().push({
            name: actor.name,
            pictureUrl: actor.profile_path,
            character: actor.character
          })
        }
      )},
      error: (error) => {
        console.error('Error fetching configuration data:', error);
      }
    })
  }

  generateHero(data: any): Hero {
    return {
      title: data.title,
      rating: Math.floor(data.vote_average * 100) / 100,
      vote_count: data.vote_count,
      season_count: data.number_of_seasons,
      imageSource: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
      date: new Date(data.first_air_date).getFullYear(),
      description: data.overview,
    }
  }

  goBack() {
    this.location.back();
  }
}
