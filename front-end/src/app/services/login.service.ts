import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3001';  

  constructor(private http: HttpClient, private jwthelp: JwtHelperService) {}

  singin(user:any){
    return this.http.post(`${this.apiUrl}/user/signin`,user);
  }

  isAuth():boolean{
    const token = localStorage.getItem('token');
    if(this.jwthelp.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }
}
