import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTileComponentComponent } from './movie-tile-component.component';

describe('MovieTileComponentComponent', () => {
  let component: MovieTileComponentComponent;
  let fixture: ComponentFixture<MovieTileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieTileComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieTileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
