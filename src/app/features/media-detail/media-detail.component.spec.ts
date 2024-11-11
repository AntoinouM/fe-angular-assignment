import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaDetailComponent } from './media-detail.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('MediaDetailComponent', () => {
  let component: MediaDetailComponent;
  let fixture: ComponentFixture<MediaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of({ get: (key: string) => key === 'id' ? 123 : null }) }, // id as number
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
