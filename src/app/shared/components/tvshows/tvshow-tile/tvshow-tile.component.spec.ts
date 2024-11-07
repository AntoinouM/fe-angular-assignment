import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowTileComponent } from './tvshow-tile.component';

describe('TvshowTileComponent', () => {
  let component: TvshowTileComponent;
  let fixture: ComponentFixture<TvshowTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvshowTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvshowTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
