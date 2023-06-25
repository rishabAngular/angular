import { Component, Input } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  data1: any;
  data2: any;
  transfer3Data: any;
  show1:any;

  constructor(
    public common: CommonService
  ) {
    this.common.transfer2Data.subscribe((res: any) => {
      console.log("transfer2Data", res);
      if (res) {
        this.show1 = res
      }
    });
  }
  @Input('xyz') public data: string = '';
  transferData() {
    this.common.passValue(this.data)
  }


  }
