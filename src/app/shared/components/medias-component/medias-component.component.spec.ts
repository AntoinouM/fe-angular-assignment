import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediasComponentComponent } from './medias-component.component';

describe('MediasComponentComponent', () => {
  let component: MediasComponentComponent;
  let fixture: ComponentFixture<MediasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediasComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
