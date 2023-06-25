import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  public info: any;
  data:any
  show:any
  constructor(
    public comon: CommonService
  ) {
    console.log(this.comon.variableTwo);
    this.comon.showValiable()
    let val = this.comon.calc(9)
    console.log(val);
    this.comon.transferData.subscribe((res:any)=>{
      console.log("transferData",res);
      if(res){
        this.show = res
      }
    });

    this.comon.transfer2Data.subscribe((res: any) => {
      console.log("transfer2Data", res);
      if (res) {
        this.show = res
      }
    });

  }
  onSend() {
    this.data = this.info
    console.log(this.info);
  }

}

