import { TestBed } from '@angular/core/testing';

import { NgRomanNumberComponentService } from './ng-roman-number-component.service';

describe('NgRomanNumberComponentService', () => {
  let service: NgRomanNumberComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgRomanNumberComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
