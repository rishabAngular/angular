import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//HttpClientModule
import {HttpClientModule} from '@angular/common/http'
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import {FormsModule} from '@angular/forms';
import { FilterFoodPipe } from './filter-food.pipe'

@NgModule({
  declarations: [
    AppComponent,
    FilterFoodPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
