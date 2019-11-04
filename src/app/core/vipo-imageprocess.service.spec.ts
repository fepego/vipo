import { TestBed } from '@angular/core/testing';

import { VipoImageprocessService } from './vipo-imageprocess.service';

describe('VipoImageprocessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VipoImageprocessService = TestBed.get(VipoImageprocessService);
    expect(service).toBeTruthy();
  });
});
