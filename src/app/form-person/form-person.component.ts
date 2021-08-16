import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PersonService} from '../_services/person.service';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css']
})
export class FormPersonComponent implements OnInit {
  formPerson: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public personService: PersonService
  ) {
  }

  ngOnInit(): void {
    this.iniciaForm();
  }

  iniciaForm(): void {
    this.formPerson = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      cpf: [null, Validators.required],
      birthDate: [null, Validators.required],
        phoneType: [null, Validators.required],
        number: [null, Validators.required]
    });
  }


  postPerson(): void {
    if (this.formPerson.valid) {
      const body = {
        firstName: this.formPerson.controls.firstName.value,
        lastName: this.formPerson.controls.lastName.value,
        cpf: this.formPerson.controls.cpf.value,
        birthDate: this.formPerson.controls.birthDate.value,
        phones: [
          {
            type: this.formPerson.controls.phoneType.value,
            number: this.formPerson.controls.number.value,
          }
        ],
      };
      this.personService.postPerson(body).then(result => {
      }).catch(error => {
        console.log('erroPost', error);
      });
    }
  }

}
