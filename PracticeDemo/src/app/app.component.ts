import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    var numbers = [11,22,33,44,55];
    // console.log(numbers[0]);
    for(let i=0;i<numbers.length;i++){
      // console.log(numbers[i]);
    }
    for(let i=numbers.length-1;i>0;i--){
      // console.log(numbers[i]);
    }
    //ES-6 for loop.
    for(let x of numbers){
      // console.log(x);
    }

    numbers.push(121);
    // console.log(numbers);

    numbers.splice(3,0,111);
    // console.log(numbers);

    // var arr = [11,22,11,33,44,11,22,55,66,11,33];
    // var uniqueArr = arr.filter(function(item,self,pos){
    //   return (self.indexOf(item)==pos);
    // });
    // console.log(uniqueArr);
    
    // var a = {'h':100,'w':200};
    // console.log(a['h']);
    // console.log(a['w']);

    var a = {'h':100,'w':200};
    var {h,w} = a;
    // console.log(a['h']);
    // console.log(a['w']);

    
    var number1 = [1,2,3,4,5];
    var number2 = [6,7,8,9,10];
    var numberCombind = [...number1 , ...number2];
    console.log(numberCombind);

    var a1 = [1,2,3,4,5,6,7,8,9];
    var a2 = [];
    console.log();
    
  }
 
}
