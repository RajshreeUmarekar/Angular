import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

interface Genders {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  genders: Genders[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
  ];
  registerForm: FormGroup;
  fullName = new FormControl('');
  emailAddress = new FormControl('');
  password = new FormControl('');
  retypePassword = new FormControl('');

  constructor(fb: FormBuilder) {
    this.registerForm = fb.group({
      fullName: this.fullName,
      emailAddress: this.emailAddress,
      password: this.password,
      retypePassword: this.retypePassword
    });
  }

  ngOnInit(): void {
  }

}
