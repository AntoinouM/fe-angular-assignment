import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaDetailComponent } from './media-detail.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClient, provideHttpClient } from '@angular/common/http';

describe('MediaDetailComponent', () => {
  let component: MediaDetailComponent;
  let fixture: ComponentFixture<MediaDetailComponent>;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaDetailComponent],
      providers: [
        provideHttpClient(),
        provideHttpClient(),
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of({ get: (key: string) => key === 'id' ? 123 : null }) }, // id as number
        },
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
});
