import {Component, OnInit} from '@angular/core';
import {PersonService} from '../_services/person.service';
import {Router} from '@angular/router';
import {Person} from '../_model/person';
import {Phone} from '../_model/phone';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {
  person = new Person();
  phone = new Phone();
  observerListPerson: Subscription = null;
  listPersons = [];
  displayedColumns = ['Id', 'firstName', 'lastName', 'CPF', 'birthDate', 'phone1'];

  constructor(
    public personService: PersonService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.getListPerson();
  }

  getListPerson(): any {
    this.observerListPerson = this.personService.getPersonList().subscribe(response => {
      this.listPersons = response;
    });
    setTimeout(() =>
    {
      this.observerListPerson.unsubscribe();
      console.log('status', this.observerListPerson);
      } , 30000);
  }

}
