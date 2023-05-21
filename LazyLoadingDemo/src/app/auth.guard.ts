import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    ) {
  //  return false;
  let loginToken = localStorage.getItem('token');
  if(!loginToken){
    alert("Please LogeIn to see the Orders")
    return false;
  } 
    return true;
  }
  
}
