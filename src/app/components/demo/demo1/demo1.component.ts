import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  myProp : string = "salut"
  myDate : Date = new Date(1983,6,28)

  myNumber : number = 10.125

  url : string = "http://www.youtube.com"

  liste : string[] = []
  showBindings : boolean = false
  showDirective : boolean = false
  showPipe : boolean = false

  userRole : string = ""

  roles : string[] = ['user', 'admin', 'modo']

  constructor(private _router : Router) { }

  ngOnInit(): void {
    
  }

  switchRole(r : any) {
    this.userRole = r.target.value
  }

  maMethod() : void {
    this.liste.push(this.myProp)
    
  }

  afficherBinding() : void {
    this.showBindings = !this.showBindings
  }

  afficherDirective() : void {
    this.showDirective = !this.showDirective
  }

  affichePipe() : void  {
    this.showPipe = !this.showPipe
  }
}
