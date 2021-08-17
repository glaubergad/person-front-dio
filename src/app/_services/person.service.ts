import {Injectable} from '@angular/core';
import {CommonService} from './_common/common.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends CommonService {

  constructor(public http: HttpClient) {
    super(http);
  }

  postPerson(body): Promise<any> {
    return super.post(`/people`, body);
  }

  getPersonList(): Observable<any> {
    return super.get(`/people`);
  }

  getPersonById(id): Observable<any> {
    return super.get(`/people/${id}`);
  }

  putPerson(person): Promise<any> {
    return super.put(`/people`, person);
  }

  deletePerson(id): Promise<any> {
    return super.delete(`/people/${id}`);
  }


}
