import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authS: LoginService, public route: Router){}

  canActivate(route: ActivatedRouteSnapshot):boolean{
   // const exprec = route.data.expectedRole;
    //const token = localStorage.getItem('token');
    
    //const { roleID } = decode(token);
    //console.log(roleID);

   // if(roleID !== exprec){
   //   console.log('Usuario no autorizado para la vista');
      return false;
    //}

    //return true;
  }
  
}
