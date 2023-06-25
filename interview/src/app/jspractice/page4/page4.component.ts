import { Component, Input } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component {
  show: any;
  data1: any;
  constructor(
    private common: CommonService
  ) {
    this.common.transferData.subscribe((res: any) => {
      console.log("transferData", res);
      if (res) {
        this.show = res
      }
    });
  }

  @Input('xyz') public data:string ='';
  transfer2Data(): void{
    this.common.pass1Value(this.data1)
    console.log(this.data1);
    
  }
}
