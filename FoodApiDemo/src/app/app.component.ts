import { Component,OnInit} from '@angular/core';
import { FoodApiService } from './food-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public foodList:any=[];

  public startLinkIndex:number=1;
  public totalRows:number=0;
  public searchedData:string='';
  
  constructor(private fd:FoodApiService){
    
  }
  ngOnInit(): void {
    let data = this.fd.getFoodList();
    data.subscribe((res:any)=>{
      // console.log(res);
      this.foodList = res;
      //Here we have calculate the total no of rows.
      this.totalRows = this.foodList.length;
    });
  }
  onSelect(){
    console.log('onSelect',this.searchedData);
    
  }
}
