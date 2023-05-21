import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oddEven'
})
export class OddEvenPipe implements PipeTransform {

  transform(params:any): any  {
    let odds = params.filter((element:number)=>{
      return element % 2!=0;
    });
    return odds;
  }

}
