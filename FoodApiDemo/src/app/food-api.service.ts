import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FoodApiService {

  constructor(private http:HttpClient) { }

  getFoodList(){
    return this.http.get('https://rest-food-api.glitch.me/api/foods');
  }
}
