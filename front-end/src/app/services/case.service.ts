import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';

import { Case } from '../interfaces/case';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  
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

  GetCase():Observable<any>{
    return this.http.get(`${environment.apiUrl}/ListarCase`);
  }
  PostCase(lista:Case):Observable<any>{
    return this.http.post(`${environment.apiUrl}/InsertCase`,JSON.stringify({"casename":lista.casename ,"datacase":lista.datacase,"noncoplanar":lista.noncoplanar}),this.HttpUploadOptions);

  }

}