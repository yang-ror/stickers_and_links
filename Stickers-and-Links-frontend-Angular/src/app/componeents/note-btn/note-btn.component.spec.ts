import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteBtnComponent } from './note-btn.component';

describe('NoteBtnComponent', () => {
  let component: NoteBtnComponent;
  let fixture: ComponentFixture<NoteBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
