import { TestBed } from '@angular/core/testing';

import { NgScrollbarService } from './ng-scrollbar.service';

describe('NgScrollbarService', () => {
  let service: NgScrollbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgScrollbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
