import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit{
  @Input('xyz') public infoData:any = [];

  constructor(){
    console.log('constructor called');
  }
  
  ngOnInit(): void {
    console.log('initialized on  memory');
  }
  
}
