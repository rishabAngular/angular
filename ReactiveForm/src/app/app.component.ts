import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myForm: any = '';
  isSumitted:boolean = false;
  public cutomForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(10),Validators.pattern('^[a-zA-Z ]*$')]),
    email: new FormControl(''),
    phone: new FormControl('',[Validators.required]),
  });
  // public cutomForm: FormGroup = new FormGroup({
  //   name: new FormControl('',[Validators.required]),
  //   email: new FormControl(''),
  //   phone: new FormControl(''),
  // });
  constructor() { }

  onSubmit() {
    this.isSumitted = true;
    console.log(this.cutomForm);
    // console.log(this.cutomForm.value);
    // console.log(this.cutomForm.status);
    console.log(this.cutomForm.controls);
  }
  reset(){
    this.isSumitted = false;
    this.cutomForm.reset()
  }
  get name() {
    return this.cutomForm.get('name')!;
  }
}
