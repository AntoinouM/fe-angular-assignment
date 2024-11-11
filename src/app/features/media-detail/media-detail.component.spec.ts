import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaDetailComponent } from './media-detail.component';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('MediaDetailComponent', () => {
  let component: MediaDetailComponent;
  let fixture: ComponentFixture<MediaDetailComponent>;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaDetailComponent, NoopAnimationsModule],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();
    httpClient = TestBed.inject(HttpClient);
    fixture = TestBed.createComponent(MediaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct title in hero nav_name element', () => {
    const testTitle = 'Breaking Bad';

    component.hero = {
      media: 'tv',
      title: testTitle, // Testing title
      rating: 8.5,
      vote_count: 100,
      season_count: 3,
      imageSource: 'any.png',
      date: 2024,
      description: 'any',
    };

    fixture.detectChanges();

    const navName = fixture.nativeElement.querySelector('.nav__name');

    expect(navName.textContent).toContain(testTitle);
  });
});
