import { Component,  OnInit } from '@angular/core';
import { UniversityApiService } from './university-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public universityList:any=[];
  public stateList:any=[];
  public searchedData:string='';
  public searchedData2:string='';
  public totalRows:number=0;
  public startLinkIndex:number=1;

  constructor(private un:UniversityApiService){

  }
  ngOnInit(): void{
    //when component will be loaded Api must be called.
    let data = this.un.getUniversityList(); //Observable
    data.subscribe((res:any)=>{
      // console.log(res);
      this.universityList = res;
      //Here he have calculate the total no of rows.
      this.totalRows = this.universityList.length;
      this.universityList.forEach((item:any)=>{
        if(item['state-province']){
        this.stateList.push(item['state-province']);
        }
      });
      // console.log('universityList',this.universityList);
      
      
      //Eliminating null values from exiting array i.e stateList
      this.stateList = this.stateList.filter(Boolean);
      //Creating Unique array from ezisting array i.e statelist
      this.stateList = this.stateList.filter((item:any,pos:number,self:any)=>{
              return self.indexOf(item) == pos;
      });
      
        // console.log(this.stateList);
        

    });
  }
  
}