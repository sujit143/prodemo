import { TestBed } from '@angular/core/testing';

import { UserdispService } from './userdisp.service';

describe('UserdispService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserdispService = TestBed.get(UserdispService);
    expect(service).toBeTruthy();
  });
});
