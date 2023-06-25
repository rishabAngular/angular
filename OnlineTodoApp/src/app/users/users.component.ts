import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { UserApiService } from './user-api.service';
import { User } from './model/User';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public SignUpForm: any;
  public loginForm:any;
  constructor(private fBuilder: FormBuilder, private uService: UserApiService,private route:Router) {
    this.SignUpForm = this.fBuilder.group({
      'name': [''],
      'email': [''],
      'phone': [''],
      'avatar': [''],
      'pass1': ['']
    });
    this.loginForm = new User('','');
  }

  ngOnInit(): void {
  }

  public get Name() { return this.SignUpForm.get('name') as FormControl; }
  public get Phone() { return this.SignUpForm.get('email') as FormControl; }
  public get Email() { return this.SignUpForm.get('phone') as FormControl; }
  public get ProfilePic() { return this.SignUpForm.get('avatar') as FormControl; }
  public get Pass1() { return this.SignUpForm.get('pass1') as FormControl; }

  resetForm() {
    var nameText = document.getElementById('t1') as HTMLInputElement;
    var phoneText = document.getElementById('t2') as HTMLInputElement;
    var emailText = document.getElementById('t3') as HTMLInputElement;
    var pass1Text = document.getElementById('p1') as HTMLInputElement;
    var imageFile = document.getElementById('file') as HTMLInputElement;

    nameText.value = phoneText.value = emailText.value = pass1Text.value = imageFile.value = '';

    nameText.focus();

  }

  onSelect(e: any) {
    console.log(e.target.files[0]);
    let file = e.target.files[0];
    this.ProfilePic.setValue(file);
  }
  onSubmit() {
    console.log(this.SignUpForm.value);
    //To send binary content as well as text data we need to use FormData class //provided by JS.
    let formData = new FormData();
    formData.append('name', this.Name.value);
    formData.append('email', this.Email.value);
    formData.append('phone', this.Phone.value);
    formData.append('avatar', this.ProfilePic.value);
    formData.append('pass1', this.Pass1.value);

    this.uService.signUp(formData)//Obserable
      .subscribe((res: any) => {
        console.log(res);
        alert(res.message);
        this.resetForm();
      });

  }
  onLogin(){
    console.log(this.loginForm);
    let loginData = {
      'email':this.loginForm.email,
      'pass1':this.loginForm.pass1
    };
    this.uService.signIn(loginData)//Obserable
    .subscribe((res:any)=>{
      console.log(res);
      if(res.message == 'success'){
        localStorage.setItem('loggedUser',res.userActive);
        localStorage.setItem('token',res.token);
        //Now redirect to Todos Component.
        this.route.navigateByUrl('/todos');
      }else{
        alert(res.message);
      }
    });
    
  }

}
