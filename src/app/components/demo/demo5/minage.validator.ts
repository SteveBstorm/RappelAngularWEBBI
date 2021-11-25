import { AbstractControl, ValidatorFn } from "@angular/forms";

export function MinAgeValidator(age : number) : ValidatorFn | null {
    return (control : AbstractControl) => {
        let currentDate : Date = new Date();
        let maDate : Date = new Date(control.value)
        if(maDate == null) return null
        if(maDate.getFullYear() <= (currentDate.getFullYear() - age)) return null
        else return { dateError : 'Vous êtes trop jeune : Minimum '+age+' ans'}
    }
}