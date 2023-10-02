import { TestBed } from '@angular/core/testing';

import { OndTabularService } from './ond-tabular.service';

describe('OndTabularService', () => {
  let service: OndTabularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OndTabularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
