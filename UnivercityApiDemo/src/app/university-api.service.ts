import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UniversityApiService {
//DI
  constructor(private http:HttpClient) { }

  getUniversityList(){
    return this.http.get('http://universities.hipolabs.com/search?country=India');
  }
}