import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkPrime'
})
export class CheckPrimePipe implements PipeTransform {
  checkPrime(x:number){
    let flag:boolean = false;
    for(let i=x-1;i>=2;i--){
      if(x%i==0){
        flag = true;
        break;
      }
    }
    if(!flag)
      return true;
    else
      return false;
  }
  transform(params:any[]): any {
    for(let number of params){
      if(this.checkPrime(number))
        return number+"=Prime";
      else
        return number+"=Composite";
    }
  }

}
