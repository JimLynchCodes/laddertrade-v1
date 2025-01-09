import { TestBed } from '@angular/core/testing';

import { SchwabTokensService } from './schwab-tokens.service';

describe('SchwabTokensService', () => {
  let service: SchwabTokensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchwabTokensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
