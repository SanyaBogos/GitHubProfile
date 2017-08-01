import { TestBed, inject } from '@angular/core/testing';

import { GlobalObjectsService } from './global-objects.service';

describe('GlobalObjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalObjectsService]
    });
  });

  it('should be created', inject([GlobalObjectsService], (service: GlobalObjectsService) => {
    expect(service).toBeTruthy();
  }));
});
