import { Component, DoCheck, OnInit } from '@angular/core';
import { PostApiService } from '../post-api.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements DoCheck,OnInit {
  public postList:any= [];

  constructor(private po:PostApiService){}
  ngOnInit(): void {
    let data = this.po.getPostList();
    data.subscribe((res:any)=>{
      console.log(res);
      this.postList = res;
    });
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  display:boolean = true
}
