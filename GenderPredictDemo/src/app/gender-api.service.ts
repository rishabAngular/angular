import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenderApiService {

  constructor(private http:HttpClient) { }

  getGender(nm:string){
    return this.http.get('https://api.genderize.io?name='+nm);
  }
  
  getAge(nm:string){
    return this.http.get('https://api.agify.io?name='+nm);
  }

  // getPost(){
  //   return this.http.get('https://jsonplaceholder.typicode.com/posts');
  // }

  // getNewPost(){
  //   return this.http.get('https://jsonplaceholder.typicode.com/comments')
  // }

  // getPhoto(){
  //   return this.http.get('https://jsonplaceholder.typicode.com/photos')
  // }
}
