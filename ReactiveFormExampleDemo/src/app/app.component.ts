import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSubmit: boolean = false;
  showPassword: boolean = false
  public myForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(10),Validators.pattern('^[a-zA-Z ]*$')]),
    email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    phone: new FormControl('',[Validators.required,Validators.minLength(18),Validators.maxLength(120), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    pin: new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(6)]),
    acceptTerms: new FormControl('',[Validators.requiredTrue]),
  });
  constructor() { }
  checkPass(){
    this.showPassword = !this.showPassword;
  }
  onSend() {
    this.isSubmit = true;
    console.log(this.myForm);
  }
  reset() {
    this.isSubmit = false;
    this.myForm.reset();
  }

  get name() {
    return this.myForm.get('name')!;
  }

  get phone() {
    return this.myForm.get('phone')!;
  }

  get email() {
    return this.myForm.get('email')!;
  }
  get acceptTerms() {
    return this.myForm.get('acceptTerms')!;
  }
  get pin() {
    return this.myForm.get('pin')!;
  }
}
