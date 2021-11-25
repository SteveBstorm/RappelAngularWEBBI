import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { DemoComponent } from './components/demo/demo.component';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/demo/demo1/user/user.component';
import { AdminComponent } from './components/demo/demo1/admin/admin.component';
import { AgePipe } from './pipes/age.pipe';
import { EnfantComponent } from './components/demo/demo2/enfant/enfant.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { TieInterceptor } from './services/tie.interceptor';
import { Demo5Component } from './components/demo/demo5/demo5.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    DemoComponent,
    ExercicesComponent,
    UserComponent,
    AdminComponent,
    AgePipe,
    EnfantComponent,
    Demo3Component,
    PokedexComponent,
    Demo4Component,
    Demo5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : TieInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
