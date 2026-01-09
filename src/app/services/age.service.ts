import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AgePayload } from '../interfaces/age-payload';



@Injectable({
  providedIn: 'root'
})
export class AgeService {

  constructor() { }

  submitAge(payload: AgePayload): Observable<any> {
    return of({ status: 'ok', received: payload });
  }
}
export { AgePayload };

