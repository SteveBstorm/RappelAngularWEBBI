import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  liste : string[] = ["salut", "arthur", "perceval"]

  constructor() { }

  ngOnInit(): void {
  }

  delete(i : number) {
    this.liste.splice(i, 1)
  }

}
