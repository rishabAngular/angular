import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter_University'
})
export class FilterUniversityPipe implements PipeTransform {

  transform(entireUniversityList: any[], filteredString: string): any {
    // console.log('FilterUniversityPipe',entireUniversityList,filteredString)
    if(filteredString.length>=3){
      //Then we will strat the Search....
      let searchUniversityList = entireUniversityList.filter((univ:any)=>{
        return univ.name.trim().toLowerCase().includes(filteredString.trim().toLowerCase());
      });
      console.log('FilterUniversityPipe retrun',searchUniversityList)
      return searchUniversityList;
    }else{
      return entireUniversityList;
    }
  }

}
