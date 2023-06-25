import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http:HttpClient) { }

  signUp(userData:any){
    return this.http.post('https://rest-food-api-demo.glitch.me/users/signup',userData);
  }
  signIn(userData:any){
    return this.http.post('https://rest-food-api-demo.glitch.me/users/signin',userData);
  }
}
