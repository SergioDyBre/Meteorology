import { TestBed } from '@angular/core/testing';

import { InfoSaverService } from './info-saver.service';

describe('InfoSaverService', () => {
  let service: InfoSaverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoSaverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
