import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaTileComponentComponent } from './media-tile-component.component';

describe('MediaTileComponentComponent', () => {
  let component: MediaTileComponentComponent;
  let fixture: ComponentFixture<MediaTileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaTileComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaTileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
