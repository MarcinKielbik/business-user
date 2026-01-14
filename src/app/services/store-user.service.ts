import { Injectable } from '@angular/core';
import { UserPayload } from '../interfaces/user-payload';
import { STORAGE_KEY } from '../storage-key';

@Injectable({
  providedIn: 'root'
})
export class StoreUserService {

  constructor() { }

  readUserData(): UserPayload | null {
    const storedUserJson = localStorage.getItem(STORAGE_KEY);

    if (!storedUserJson) {
      console.warn('Brak danych w Local Storage pod kluczem', STORAGE_KEY);
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
