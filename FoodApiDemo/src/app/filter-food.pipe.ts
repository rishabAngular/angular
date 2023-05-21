import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter_Food'
})
export class FilterFoodPipe implements PipeTransform {

  transform(entireFoodList: any[], filteredString: string): any {
    if(filteredString.length>=5){
      let searchedFoodList = entireFoodList.filter((foo:any)=>{
        return foo.food_name.trim().toLowerCase().includes(filteredString.trim().toLowerCase());
      });
      return searchedFoodList;
    }else{
      return entireFoodList;
    }
  }

}
