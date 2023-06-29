import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

interface Duration {
  value: string;
  viewValue: string;
}
interface Persons {
  value: string;
  viewValue: string;
}
interface Dishes {
  value: string;
  viewValue: string;
}
interface Times {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.scss']
})
export class CookComponent implements OnInit {
  hireCookForm: FormGroup;
  fullName = new FormControl('');
  italian = new FormControl('');
  chinese = new FormControl('');
  mexican = new FormControl('');
  indian = new FormControl('');
  
  durations: Duration[] = [
    {value: 'daily', viewValue: 'Daily'},
    {value: 'weekly', viewValue: 'Weekly'},
    {value: 'monthly', viewValue: 'Monthly'},
    {value: 'yearly', viewValue: 'Yearly'}
  ];
  persons: Persons[] = [
    {value: '1', viewValue: 'One'},
    {value: '2', viewValue: 'Two'},
    {value: '3', viewValue: 'Three'},
    {value: '4', viewValue: 'Four'},
    {value: '5', viewValue: 'Five'},
    {value: '6', viewValue: 'Six'},
    {value: '7', viewValue: 'Seven'},
    {value: '8', viewValue: 'Eight'},
    {value: '9', viewValue: 'Nine'},
    {value: '10', viewValue: 'Ten'},
  ];
  dishes: Dishes[] = [
    {value: '1', viewValue: 'One'},
    {value: '2', viewValue: 'Two'},
    {value: '3', viewValue: 'Three'},
    {value: '4', viewValue: 'Four'},
    {value: '5', viewValue: 'Five'},
  ];
  times: Times[] = [
    {value: '1', viewValue: 'Once'},
    {value: '2', viewValue: 'Twice'},
    {value: '3', viewValue: 'Thrice'},
  ];

  constructor(fb: FormBuilder) {
    this.hireCookForm = fb.group({
      fullName: this.fullName,
      italian: this.italian,
      chinese: this.chinese,
      indian: this.indian,
      mexican: this.mexican
    });
  }

  ngOnInit(): void {
  }

}
