import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerPanelComponent } from './sticker-panel.component';

describe('StickerPanelComponent', () => {
  let component: StickerPanelComponent;
  let fixture: ComponentFixture<StickerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickerPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
