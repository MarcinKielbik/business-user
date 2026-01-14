import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { UserPayload } from '../interfaces/user-payload';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should be status ok and transmitted payload', (done) => {
    const payload: UserPayload = {
      firstName: 'Jan',
      lastName: 'Kowalski',
      email: 'jankowalski@inetum.com',
      organization: 'Inetum',
      age: 18,
      termsAccepted: true
    }

    service.submitUser(payload).subscribe(res => {
      expect(res).toEqual({ status: 'ok', received: payload });
      done();
    })

  });
});
