import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Adding a Property
  public name:string='RaMbo';
  public content:string='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ut laudantium neque quasi maiores autem perspiciatis possimus?';
  public date = new Date();
  public amount = 12343.45;
  public marks:number=0.25;
  public fruits:any=['Apple','Mango','Banana','Pineapple'];
  public foodList:any=[
    {'food_id':1001,'food':'Chicken Biriyani','price':200},
    {'food_id':1002,'food':'Mutton Biriyani','price':250}
  ];
}
