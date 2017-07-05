import { TestBed, inject } from '@angular/core/testing';

import { EventManagerService } from './eventmanager.service';

describe('EventmanagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventManagerService]
    });
  });

  it('should be created', inject([EventManagerService], (service: EventManagerService) => {
    expect(service).toBeTruthy();
  }));
});
