import { TestBed } from '@angular/core/testing';

import { ContentStoreService } from './content-store.service';

describe('ContentStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentStoreService = TestBed.get(ContentStoreService);
    expect(service).toBeTruthy();
  });
});
