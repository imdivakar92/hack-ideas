import { TestBed } from '@angular/core/testing';

import { LogoutCheckGuard } from './logout-check.guard';

describe('LogoutCheckGuard', () => {
  let guard: LogoutCheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogoutCheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
