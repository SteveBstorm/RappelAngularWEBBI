import { Component, OnInit } from '@angular/core';
import { Pokedex, PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokelist! : Pokedex

  constructor(
    private _pokedex : PokemonService
  ) { }

  ngOnInit(): void {
    this._pokedex.getPokelist().subscribe(
      (data : Pokedex) => {
        this.pokelist = data
      }, // try
      (error) => console.log(error), //catch
      () => console.log('je me produis quoi qu\'il arrive') //finally
    )
  }

  next() {
    
  }

  previous() {}

}
