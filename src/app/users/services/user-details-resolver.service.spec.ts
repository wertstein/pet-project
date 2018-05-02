import { TestBed, inject } from '@angular/core/testing';

import { UserDetailsResolver } from './user-details-resolver.service';

describe('UserDetailsResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDetailsResolver]
    });
  });

  it('should be created', inject([UserDetailsResolver], (service: UserDetailsResolver) => {
    expect(service).toBeTruthy();
  }));
});
