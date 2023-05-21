import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CubePipe } from './cube.pipe';
import { OddEvenPipe } from './odd-even.pipe';
import { CheckPrimePipe } from './check-prime.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CubePipe,
    OddEvenPipe,
    CheckPrimePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
