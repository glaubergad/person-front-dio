import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http: HttpClient) {
  }

  public get(uri: string, options?): Promise<any> {
    return this.http.get(`${environment.apiurl}${uri}`, options).toPromise();
  }

  public post(uri: string, body: any, options?): Promise<any> {
    return this.http.post(`${environment.apiurl}${uri}`, body, options).toPromise();
  }

  public put(uri: string, body: any, options?): Promise<any> {
    return this.http.put(`${environment.apiurl}${uri}`, body, options).toPromise();
  }

  public delete(uri: string, body?: any): Promise<any> {
    return this.http.delete(`${environment.apiurl}${uri}`, body).toPromise();
  }

}
