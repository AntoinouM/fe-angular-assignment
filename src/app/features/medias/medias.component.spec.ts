import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediasComponent } from './medias.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('MediasComponent', () => {
  let component: MediasComponent;
  let fixture: ComponentFixture<MediasComponent>;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediasComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    fixture = TestBed.createComponent(MediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
