import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  // title = 'demo';
  public parentData:any=[];
  onSend(t1:any){
    // console.log(t1.value);
    this.parentData = t1.value;
  }
 
}
