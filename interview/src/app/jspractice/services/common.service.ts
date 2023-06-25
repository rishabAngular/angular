import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  

  constructor() { }
  private variableOne:any = "private 123"
  public variableTwo:any = "public 321"
  protected variableThree:any = "protected 321"
  private pi = 3.14;

  showValiable(){
    console.log(this.variableTwo);
    console.log(this.variableOne);
    console.log(this.variableThree);
  }

  calc(p1:any){
    return (p1 * this.pi)
  }

  /** Subject or BehaviorSubject we can transfer from Child to Child **/
  // public transferData:any = new Subject<string>();
  public transferData:any = new BehaviorSubject<any>("");

  passValue(data:any) {
    this.transferData.next(data);
  }


  /** Subject or BehaviorSubject we can transfer from Child to Child **/
  public transfer2Data:any = new Subject<string>();
  // public transfer2Data:any = new BehaviorSubject<any>("");

  pass1Value(data1:any) {
    this.transfer2Data.next(data1);
  }


   /** Subject or BehaviorSubject we can transfer from Child to Child **/
   public transfer3Data:any = new Subject<string>();
   // public transfer2Data:any = new BehaviorSubject<any>("");
 
   pass2Value(data2:any) {
     this.transfer3Data.next(data2);
   }
}
