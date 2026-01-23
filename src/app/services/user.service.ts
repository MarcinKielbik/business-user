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
<<<<<<< HEAD

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
=======
}
>>>>>>> f345d5b4dff85130fdc46a1ced36ed6a24f8f865
