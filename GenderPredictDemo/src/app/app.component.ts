import { Component } from '@angular/core';
import { GenderApiService } from './gender-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public predictGender:string='';
  public predictAge:string='';
  public post:any=[];
  public photo:any=[];
  constructor(private gd:GenderApiService){

  }
  onPredict(nm:any){
    console.log(nm.value);

    this.gd.getGender(nm.value).subscribe((res:any)=>{
      console.log(res.gender);
      this.predictGender = res.gender;
    });

    this.gd.getAge(nm.value).subscribe((res:any)=>{
      console.log(res.age);
      this.predictAge = res.age;
    });

    // this.gd.getPost().subscribe((res:any)=>{
      
    //   this.post = res
    //   console.log(this.post);
    // });
    
    // this.gd.getNewPost().subscribe((res:any)=>{
      
    //   this.post = res
    //   console.log(this.post);
    // });

    // this.gd.getPhoto().subscribe((res:any)=>{
      
    //   this.photo = res
    //   console.log(this.photo);
    // });

  }

}
