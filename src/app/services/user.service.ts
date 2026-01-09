import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserPayload } from '../interfaces/user-payload';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  submitUser(userPayload: UserPayload): Observable<any> {
      return of({ status: 'ok', received: userPayload });
    }
}
