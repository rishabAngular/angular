import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route: Router) { }
  canActivate(): boolean {
    let token = localStorage.getItem('token');
    if (!token) {
      alert('Please Login First');
      this.route.navigateByUrl('/users');
      return false;
      
    }else{
      return true;
    }
  }

}
