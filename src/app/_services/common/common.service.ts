import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http: HttpClient) { }

  public get(uri: string, options?): Observable<any> {
    return this.http.get(`${environment.apiurl}${uri}`, options);
  }

  public post(uri: string, body: any, options?): Observable<any> {
    return this.http.post(`${environment.apiurl}${uri}`, body, options);
  }

  public put(uri: string, body: any, options?): Observable<any>  {
    return this.http.put(`${environment.apiurl}${uri}`, body, options);
  }

  public delete(uri: string, body?: any): Observable<any> {
    return this.http.delete(`${environment.apiurl}${uri}`, body);
  }

}
