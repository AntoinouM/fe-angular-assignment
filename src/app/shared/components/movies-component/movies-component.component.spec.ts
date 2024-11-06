import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponentComponent } from './movies-component.component';

describe('MoviesComponentComponent', () => {
  let component: MoviesComponentComponent;
  let fixture: ComponentFixture<MoviesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
