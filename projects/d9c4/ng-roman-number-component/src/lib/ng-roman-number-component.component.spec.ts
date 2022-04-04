import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRomanNumberComponentComponent } from './ng-roman-number-component.component';

describe('NgRomanNumberComponentComponent', () => {
  let component: NgRomanNumberComponentComponent;
  let fixture: ComponentFixture<NgRomanNumberComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgRomanNumberComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRomanNumberComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
