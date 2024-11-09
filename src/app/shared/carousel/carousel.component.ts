import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, input, signal } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

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

  ngAfterViewInit() {
    this.container.set(this.carouselContainer.nativeElement)
    this.container()?.addEventListener('scroll', () => this.updateNavigation())
  }

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

  ngOnDestroy() {
    this.container()?.removeEventListener('scroll', ()=>{});
  }
}