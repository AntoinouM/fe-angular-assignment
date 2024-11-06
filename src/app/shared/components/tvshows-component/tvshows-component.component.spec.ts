import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowsComponentComponent } from './tvshows-component.component';

describe('TvshowsComponentComponent', () => {
  let component: TvshowsComponentComponent;
  let fixture: ComponentFixture<TvshowsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvshowsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvshowsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
