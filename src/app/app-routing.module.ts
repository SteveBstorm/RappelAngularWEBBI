import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';

const routes: Routes = [
  {path : 'demo', component : DemoComponent, children : [
    { path : 'demo1', component : Demo1Component},
    { path : 'demo2', component : Demo2Component},
    { path : 'demo3', component : Demo3Component},
    { path : 'demo4', component : Demo4Component},
    { path : 'demo5', component : Demo5Component},
  ]},

  {path : 'exo', component : ExercicesComponent},
  {path : 'poke', component : PokedexComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
