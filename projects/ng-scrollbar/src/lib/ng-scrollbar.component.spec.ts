import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgScrollbarComponent } from './ng-scrollbar.component';

describe('NgScrollbarComponent', () => {
  let component: NgScrollbarComponent;
  let fixture: ComponentFixture<NgScrollbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgScrollbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgScrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
