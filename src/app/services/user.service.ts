import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserPayload } from '../interfaces/user-payload';
import { of } from 'rxjs/internal/observable/of';
import { STORAGE_KEY } from '../storage-key';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  submitUser(userPayload: UserPayload): Observable<any> {
    return of({ status: 'ok', received: userPayload });
  }
  
  saveUserData(userPayload: UserPayload): void {

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userPayload));
    } catch (e) {
      console.error('Błąd zapisu do Local Storage:', e);
    }

  }

}
