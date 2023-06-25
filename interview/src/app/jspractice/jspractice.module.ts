import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JspracticeRoutingModule } from './jspractice-routing.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { FormsModule } from '@angular/forms';
import { Page4Component } from './page4/page4.component';

@NgModule({
  declarations: [
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    JspracticeRoutingModule
  ]
})
export class JspracticeModule { }
