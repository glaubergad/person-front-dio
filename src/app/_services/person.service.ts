import {Injectable} from '@angular/core';
import {CommonService} from './common/common.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends CommonService {

  constructor(public http: HttpClient) {
    super(http);
  }

  postPerson(body): Observable<any> {
    return super.post(`/people`, body);
  }

  getPersonList(): Observable<any> {
    return super.get(`/people`);
  }

  getPersonById(id): Observable<any> {
    return super.get(`/people/${id}`);
  }

  putPerson(person): Observable<any> {
    return super.put(`/people`, person);
  }

  deletePerson(id): Observable<any> {
    return super.delete(`/people/${id}`);
  }


}
