import { Component } from '@angular/core';
import { User } from './modal/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myForm:any='';
  constructor(){
    this.myForm = new User('','','','','');
  }

  onSubmit(userData:any){
    console.log(this.myForm);
    console.log(userData.value);

  }
}
