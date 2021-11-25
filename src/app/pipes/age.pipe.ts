import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    let myDate = value.getFullYear()
    let currentDate = new Date().getFullYear()

    let result = "Vous avez " + (currentDate - myDate) + " ans"
    return result;
  }

}
