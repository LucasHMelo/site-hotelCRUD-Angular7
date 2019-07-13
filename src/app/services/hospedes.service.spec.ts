import { TestBed } from '@angular/core/testing';

import { HospedesService } from './hospedes.service';

describe('HospedesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HospedesService = TestBed.get(HospedesService);
    expect(service).toBeTruthy();
  });
});
