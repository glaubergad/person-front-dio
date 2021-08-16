import {Component, OnInit} from '@angular/core';
import {PersonService} from '../_services/person.service';
import {Router} from '@angular/router';
import {Person} from '../_model/person';
import {Phone} from '../_model/phone';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {
  person = new Person();
  phone = new Phone();
  listPersons = [];
  displayedColumns = ['Id', 'firstName', 'lastName', 'CPF', 'birthDate'];

  constructor(
    public personService: PersonService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.getListPerson();
  }

  getListPerson(): any {
    this.personService.getPersonList().then(response => {
      console.log('Resposta', response);
      this.listPersons = response;
      /*for (const person of response){
        this.listPersons.push(person);
      }*/
    }).catch(error => {
      console.log('Erro ao obter lista', error);
    });
  }

}
