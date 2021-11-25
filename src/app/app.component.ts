import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RappelWebBi';

  isConnected! : boolean
  
  constructor(
    private _auth : AuthService
  ) {}

  ngOnInit(): void {
    this._auth.statusSubject.subscribe(
      (status : boolean) => {
        this.isConnected = status 
      }
    )
    this._auth.emitStatus()

  }
}
