import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  public myPromise:any='';
  public myObserable:any='';

  constructor(){
    this.myPromise = new Promise((resolve:any,reject:any)=>{
      let x =10; let y =0;
      resolve((x/y));
      resolve('Done');
      resolve('Done Again');
      resolve('Hello World');
      console.log('Promise Object Created');
    });

    this.myObserable = new Observable((observer:any)=>{
      let x =10; let y =2;
      observer.next((x/y));
      observer.next('Done');
      observer.next('Done Again');
      console.log('Obserable Created');
    });
  }

  ngOnInit(): void {
    this.myPromise
        .then((value:any)=>{console.log(value);})
        .catch((err:any)=>{console.log(err);})
        .finally(()=>{console.log('Compulsory Block');})

    this.myObserable.subscribe(
      (res:any)=>{
      console.log(res);  
    },(error:any)=>{
      console.log(error);
    });
  }
}
