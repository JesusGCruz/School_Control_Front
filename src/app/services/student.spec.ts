import { TestBed } from '@angular/core/testing';

import { Students } from './student';

describe('Student', () => {
  let service: Students;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Students);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
