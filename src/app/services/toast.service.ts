import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Toast } from '../interfaces/toast';

export type ToastType = 'success' | 'error' | 'warning' | 'info'


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  private _stream = new Subject<Toast>();
  private _id = 0;

  // komponent kontenera będzie się na to subskrybował
  readonly stream$ = this._stream.asObservable();

  show(message: string, type: ToastType = 'info', timeout = 4000) {
    this._stream.next({ id: ++this._id, type, message, timeout });
  }
  info(message: string, timeout = 4000) { this.show(message, 'info', timeout); }
  success(message: string, timeout = 4000) { this.show(message, 'success', timeout); }
  warn(message: string, timeout = 4500) { this.show(message, 'warning', timeout); }
  error(message: string, timeout = 5000) { this.show(message, 'error', timeout); }


}
