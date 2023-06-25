import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component {
  show:any;
  constructor(
    private common: CommonService
  ){
    this.common.transferData.subscribe((res:any)=>{
      console.log("transferData",res);
      if(res){
        this.show = res
      }
    });
  }
}
