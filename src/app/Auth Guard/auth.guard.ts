import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService){}
  canActivate(){
    // Logic
    if(this.authService.isuserloggedin()){
      return true
    }
    else{
      alert("Permission Denied")
      return false;
    }
  }
  
}
