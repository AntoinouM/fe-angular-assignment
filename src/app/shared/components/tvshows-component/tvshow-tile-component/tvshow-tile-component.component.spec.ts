import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowTileComponentComponent } from './tvshow-tile-component.component';

describe('TvshowTileComponentComponent', () => {
  let component: TvshowTileComponentComponent;
  let fixture: ComponentFixture<TvshowTileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvshowTileComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvshowTileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
