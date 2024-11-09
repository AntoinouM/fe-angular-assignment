import { Component, ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges, OnDestroy, input, signal } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
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

export class CarouselComponent implements AfterViewInit, OnDestroy {

  title = input<string>('');

  canNavigateLeft = signal<boolean>(false);
  canNavigateRight = signal<boolean>(true);
  container = signal<HTMLElement | undefined>(undefined);

  @ViewChild('carouselContainer') carouselContainer!: ElementRef;

//implements AfterViewInit, OnChanges, OnDestroy

  ngAfterViewInit() {
    this.container.update(() => this.carouselContainer.nativeElement)
    this.container()?.addEventListener('scroll', () => this.updateNavigation())
      //   setTimeout(() => {
  //     this.resetCarousel();
  //     this.updateNavigation();
  //   }, 300); // Increased timeout to ensure elements are fully rendered
  }

  // @ViewChild('carouselContainer') carouselContainer!: ElementRef;

  // private routerSubscription!: Subscription;

  // constructor(private router: Router) {
  //   // Add window resize listener to update navigation buttons
  //   window.addEventListener('resize', this.updateNavigation.bind(this));
  // }

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.resetCarousel();
  //     this.updateNavigation();
  //   }, 300); // Increased timeout to ensure elements are fully rendered

  //   // Subscribe to router events to reset the carousel on route change
  //   this.routerSubscription = this.router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //       this.resetCarousel();
  //     }
  //   });
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['items'] && !changes['items'].firstChange) {
  //     this.resetCarousel();
  //   }
  // }

  prevSlide() {
    if (this.carouselContainer.nativeElement.scrollLeft > 0) {
      this.carouselContainer.nativeElement.scrollTo({
        left: this.carouselContainer.nativeElement.scrollLeft - 1000,
        behavior: 'smooth'
      });
      setTimeout(() => {
        this.updateNavigation();
      }, 300);
    }
  }

  nextSlide() {
    if (this.carouselContainer.nativeElement.scrollWidth > this.carouselContainer.nativeElement.scrollLeft + this.carouselContainer.nativeElement.clientWidth) {
      this.carouselContainer.nativeElement.scrollTo({
        left: this.carouselContainer.nativeElement.scrollLeft + 1000,
        behavior: 'smooth'
      });
      setTimeout(() => {
        this.updateNavigation();
      }, 300);
    }
  }

  private updateNavigation() {
    const buffer = 5;
    this.canNavigateLeft.set(this.container()!.scrollLeft > 0);
    this.canNavigateRight.set(this.container()!.scrollWidth > this.container()!.scrollLeft + this.container()!.clientWidth + buffer);
  }

  // private resetCarousel() {
  //   if (this.carouselContainer) {
  //     this.carouselContainer.nativeElement.scrollTo({
  //       left: 0,
  //       behavior: 'smooth'
  //     });

  //     setTimeout(() => {
  //       this.updateNavigation();
  //     }, 300);
  //   } else {
  //     console.warn('Carousel container not found.');
  //   }
  // }

  ngOnDestroy() {
    // if (this.routerSubscription) {
    //   this.routerSubscription.unsubscribe();
    // }
    // window.removeEventListener('resize', this.updateNavigation.bind(this));
    this.container()?.removeEventListener('scroll', ()=>{});
  }
}