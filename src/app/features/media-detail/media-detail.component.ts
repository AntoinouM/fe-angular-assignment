import { Component, DestroyRef, inject, input, signal, WritableSignal } from '@angular/core';
import { Location } from '@angular/common';
import { Hero } from '../../core/models/hero.model';
import { Actor } from '../../core/models/actor.model';
import { ActivatedRoute, Params } from '@angular/router';
import { TmdbApiService } from '../../core/services/tmdb-api.service';
import { HeroComponent } from '../../shared/hero/hero.component';
import { OverviewComponent } from '../../shared/overview/overview.component';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { ActorCardComponent } from '../../shared/actor-card/actor-card.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-media-detail',
  standalone: true,
  imports: [HeroComponent, OverviewComponent, CarouselComponent, ActorCardComponent],
  templateUrl: './media-detail.component.html',
  styleUrl: './media-detail.component.scss',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('600ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class MediaDetailComponent {

  media: 'tv' | 'movie' ='tv';
  id!: number;
  data: WritableSignal<any> = signal({});
  cast_data: WritableSignal<any> = signal({});
  hero: WritableSignal<Hero> = signal({
    media: 'tv',
    title: '',
    rating: 0,
    vote_count: 0,
    season_count: null,
    imageSource: '',
    date: 0,
    description: '',
  })
  cast: WritableSignal<Actor[]> = signal([])

  private route = inject(ActivatedRoute);
  private location = inject(Location);
  private api = inject(TmdbApiService);
  private destroyRef$ = inject(DestroyRef)

  constructor() {}


  ngOnInit() {
    this.route.url
        .pipe(takeUntilDestroyed(this.destroyRef$))
    .subscribe((urlSegment) => {
      urlSegment[0].path === 'tvshow' ? this.media = 'tv' : this.media = 'movie';
    })
   this.route.params
       .pipe(takeUntilDestroyed(this.destroyRef$))
   .subscribe((params: Params) => {
     this.id = +params['id'];
     this.loadData(this.id)
   });
 }

 loadData(id: number) {
   this.fetchData(this.media, id);
   this.fetchCastInfo(this.media, id)
 }

 fetchData(mediaType: string, id: number): void {
   this.api.getTvShow(mediaType, id)
       .pipe(takeUntilDestroyed(this.destroyRef$))
   .subscribe({
     next: (response) => {
       this.data.set(response);
       this.hero.set(this.generateHero(response));
     },
     error: (error) => {
       console.error('Error fetching configuration data:', error);
     }
   })
 }

 fetchCastInfo(mediaType: string, id: number): void {
   this.api.getCredits(mediaType, id)
       .pipe(takeUntilDestroyed(this.destroyRef$))
   .subscribe({
     next: (response) => {
       this.cast_data.set(response.cast);
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
    media: this.media,
     title: this.media === 'tv' ? data.name : data.title,
     rating: Math.floor(data.vote_average * 100) / 100,
     vote_count: data.vote_count,
     season_count: data.number_of_seasons,
     imageSource: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
     date: this.media === 'tv' ? data.first_air_date : data.release_date,
     description: data.overview,
   }
 }

 goBack() {
   this.location.back();
 }

}
