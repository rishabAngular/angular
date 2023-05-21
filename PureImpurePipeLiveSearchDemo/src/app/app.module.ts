import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//Forms Module
import { FormsModule } from '@angular/forms';
import { FilterFoodPipe } from './filter-food.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterFoodPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
