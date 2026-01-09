import { TestBed } from '@angular/core/testing';

import { AgePayload, AgeService } from './age.service';

describe('AgeService', () => {
  let service: AgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgeService]
    });
    service = TestBed.inject(AgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be status ok and transmitted payload', (done) => {
    const payload: AgePayload = {age: 18, termsAccepted: true};

    service.submitAge(payload).subscribe(res => {
      expect(res).toEqual({status: 'ok', received: payload});
      done();
    });
  });
});