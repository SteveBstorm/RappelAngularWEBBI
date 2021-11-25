import { Component, OnInit } from '@angular/core';
import { SecureauthService } from 'src/app/services/secureauth.service';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {

  constructor(
    private _auth : SecureauthService
  ) { }

  login() {
    this._auth.login()
  }

  getMovie() {
    this._auth.getFilmById()
  }

  ngOnInit(): void {
  }

}
