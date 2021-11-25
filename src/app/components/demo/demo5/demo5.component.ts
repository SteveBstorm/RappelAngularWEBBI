import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MinAgeValidator } from './minage.validator';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit {

  myFormgroup! : FormGroup

  constructor(
    private _builder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.myFormgroup = this._builder.group(
      {
        name : ['toto', Validators.required],
        email : ['a@tt', [Validators.required, Validators.email]],
        age : [18, Validators.min(12)],
        birthdate : [null, MinAgeValidator(18)]
      }
    )
  }

  onSubmit() {
    let values = this.myFormgroup.value
    let newUser : User = new User()
    newUser.mail = values['email']
    newUser.nom = values['name']
    newUser.age = values['age']
    console.log(newUser)
  }

}

export class User {
  age? : number
  nom? : string
  mail? : string
}