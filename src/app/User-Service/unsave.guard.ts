import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AddUserComponent } from './add-user/add-user.component';

export interface canComponentLeave{
  canLeave: () => boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UnsaveGuard implements CanDeactivate<canComponentLeave> {
  canDeactivate(component: canComponentLeave){
   if(component.canLeave){
     return component.canLeave();
   }
   return true;
  }
  
  
}
