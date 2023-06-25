import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlpracticeRoutingModule } from './htmlpractice-routing.module';
import { Page1Component } from './page1/page1.component';
import {HttpClientModule} from '@angular/common/http'
import { PostApiService } from './post-api.service';



@NgModule({
  declarations: [
    Page1Component
  ],
  imports: [
    CommonModule,
    HtmlpracticeRoutingModule,
    HttpClientModule
  ],
  providers:[
    PostApiService
  ]
})
export class HtmlpracticeModule { }
