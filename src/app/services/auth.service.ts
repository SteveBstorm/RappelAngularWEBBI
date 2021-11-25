import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _isConnected : boolean = false

  get isConnected() : boolean {
    if(localStorage.getItem('status') == 'true')
      {
        this._isConnected = true
      }
    return this._isConnected
  }

  statusSubject : Subject<boolean> = new Subject<boolean>()

  emitStatus() {
    this.statusSubject.next(this.isConnected)
  }

  constructor() { }

  connect(){
    this._isConnected = true
    //sessionStorage.setItem('status', this.isConnected.toString())
    localStorage.setItem('status', this.isConnected.toString())
    this.emitStatus()
  }

  disconnect() {
    this._isConnected = false
    //sessionStorage.clear()
    //sessionStorage.removeItem('status')
    localStorage.clear()
    this.emitStatus()
  }
}
