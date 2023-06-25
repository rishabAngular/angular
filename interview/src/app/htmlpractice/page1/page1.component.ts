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
    this.po.getPostList().subscribe((res:any)=>{
      console.log("subscribe",res);
      this.postList = res;
    });

    this.po.getPostListPromiss().then((res:any)=>{
      console.log("promiss",res);
      // this.postList = res;
    })
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  display:boolean = true
}
