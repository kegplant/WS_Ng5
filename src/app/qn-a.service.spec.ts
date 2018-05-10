import { TestBed, inject } from '@angular/core/testing';

import { QnAService } from './qn-a.service';

describe('QnAService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QnAService]
    });
  });

  it('should be created', inject([QnAService], (service: QnAService) => {
    expect(service).toBeTruthy();
  }));
});
