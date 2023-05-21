import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PureImpurePipeLiveSearchDemo';
  // Create JSON Array
  public foodList:any=[
    {'food_id':1001,'food':'Chicken Biriyani','price':200,'pic':'./assets/image/chicken biriyani.jpg'},
    {'food_id':1002,'food':'Mutton Biriyani','price':350,'pic':'./assets/image/mutton biriyani.jpg'},
    {'food_id':1003,'food':'Chilly Chicken','price':160,'pic':'./assets/image/chilly chicken.jpg'},
    {'food_id':1004,'food':'Paneer Butter Masala','price':200,'pic':'./assets/image/Panner Butter Masla.jpg'},
    {'food_id':1005,'food':'Veg Dal Makhani','price':150,'pic':'./assets/image/Veg Dal Makhani.jpg'}
  ];
  public itemToSearched:string='';
  public selectedFoodItem:any=[];

  onSelect(foodItem:any){
    // console.log(foodItem);
    this.selectedFoodItem = foodItem;
    console.log(this.selectedFoodItem);
    
  }
}
