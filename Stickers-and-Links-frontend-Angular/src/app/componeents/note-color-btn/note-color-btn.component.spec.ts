import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteColorBtnComponent } from './note-color-btn.component';

describe('NoteColorBtnComponent', () => {
  let component: NoteColorBtnComponent;
  let fixture: ComponentFixture<NoteColorBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteColorBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteColorBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
