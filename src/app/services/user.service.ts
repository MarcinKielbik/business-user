import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserPayload } from '../interfaces/user-payload';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  STORAGE_KEY = 'userData'

  constructor() { }

  submitUser(userPayload: UserPayload): Observable<any> {
    return of({ status: 'ok', received: userPayload });
  }
  
  saveUserData(userPayload: UserPayload): void {

    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(userPayload));
    } catch (e) {
      console.error('Błąd zapisu do Local Storage:', e);
    }

  }



  readUserData(): UserPayload | null {
    const storedUserJson = localStorage.getItem(this.STORAGE_KEY);

    if (!storedUserJson) {
      console.warn('Brak danych w Local Storage pod kluczem', this.STORAGE_KEY);
      return null;
    }

    try {
      const storedUser: UserPayload = JSON.parse(storedUserJson);
      console.log('Odczytanie danych z Local Storage: ', storedUser);
      return storedUser;
    } catch (e) {
      console.error('Błąd parsowania JSON z Local Storage:', e);
      return null;
    }
  }
}
