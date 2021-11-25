import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  isConnected! : boolean

  constructor(
    private _auth : AuthService
  ) { }

  ngOnInit(): void {
    //this.isConnected = localStorage.getItem('status') == 'true' ? true : false

    this._auth.statusSubject.subscribe(
      (status : boolean) => {
        this.isConnected = status 
        
      }
    )
    this._auth.emitStatus()

  }

  login() {
    this._auth.connect()
    

  }

  logout() {
    this._auth.disconnect()

  }
}
