import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFood',
  pure:true
})
export class FilterFoodPipe implements PipeTransform {

  transform(entireData:any[],searchedTerm:string): any {
    if(searchedTerm.length >=2){
      let searchedFoodItem = entireData.filter((foodItem:any)=>{
        return foodItem.food.trim().toLowerCase().includes(searchedTerm.trim().toLowerCase());
      });
      return searchedFoodItem;
    }
    return entireData;
  }

}
