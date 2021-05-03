import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {
    console.log(value);
    let currentYear:any = new Date().getFullYear();
    let userYear :any = new Date(value).getFullYear();
     let userAge = currentYear-userYear;
    return userAge;
  }

}
