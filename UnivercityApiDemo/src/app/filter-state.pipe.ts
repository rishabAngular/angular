import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter_State'
})
export class FilterStatePipe implements PipeTransform {

  transform(entireUniversityList: any[], searchedState: string): any {
    // console.log('FilterStatePipe',entireUniversityList,'->',searchedState)

    if(!searchedState)
      return entireUniversityList;
      else{
        let searchedUniversity = entireUniversityList.filter((univ:any)=>{
          return univ['state-province'] == searchedState;
        });
        return searchedUniversity;
      }
  }

}
