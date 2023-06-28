import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { Cancer } from '../interfaces/cancer';

@Injectable({
  providedIn: 'root'
})
export class CancerService {

  constructor(private http:HttpClient) { }

  HttpUploadOptions = {
    headers: new HttpHeaders(
      {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Content-Type': 'application/json',
    }
    ),
  };

  GetCancer():Observable<any>{
    return this.http.get(`${environment.apiUrl}/ListarCancer`);
  }
  PostCancer(lista:Cancer):Observable<any>{
    return this.http.post(`${environment.apiUrl}/InsertCancer`,JSON.stringify({"cancername":lista.cancername ,"cancerdescription":lista.cancerdescription}),this.HttpUploadOptions);

  }
}