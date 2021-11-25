import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecureauthService {

  private url :string = "http://stevebstorm.somee.com/api/"

  constructor(
    private _client : HttpClient
  ) { }

  currentUser! : User

  login() {
    this._client.post<User>(this.url+'auth/auth', {email : 'steve.lorent@bstorm.be', password : 'test1234'})
    .subscribe(
      (data : User) => { 
        this.currentUser = data
        localStorage.setItem('token', this.currentUser.token)
        console.log(this.currentUser)
      }
    )
  }

  getFilmById() {
    // let myHeader = new HttpHeaders ({
    //   'Authorization' : 'Bearer '+localStorage.getItem('token')
    // })
    this._client.get<any>(this.url+'movie/1'/*, {headers : myHeader}*/).subscribe(
      (data : any) => {
        console.log(data)
      }
    )
  }
}

export interface User {
  id : number
  token : string
  email : string
  isAdmin : boolean
  firstName : string
}
