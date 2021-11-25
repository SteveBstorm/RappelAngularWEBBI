import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url : string = environment.apiurl

  pokelist! : Pokedex

  constructor(
    private _client : HttpClient
  ) { }

  getPokelist() : Observable<Pokedex> {
    return this._client.get<Pokedex>(this.url)
    // this._client.get<Pokedex>(this.url).subscribe(
    //   (data : Pokedex) => {this.pokelist = data}
    // )
  }

  // postItem(test : any) {
  //   this._client.post(this.url, test).subscribe(
  //     () => console.log("ca a marché")
  //   )

  //   this._client.delete(this.url+'/id').subscribe()
  // } 


}

export interface Pokedex {
  count : number
  next : string
  previous : string
  results : Result[]
}

export interface Result {
  name : string
  url : string
}