import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

interface Duration {
  value: string;
  viewValue: string;
}
interface Rooms {
  value: string;
  viewValue: string;
}
interface Floors {
  value: string;
  viewValue: string;
}
interface Times {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss']
})
export class HireComponent implements OnInit {
  hireForm: FormGroup;
  fullName = new FormControl('');
  sweeping = new FormControl('');
  mopping = new FormControl('');
  dusting = new FormControl('');
  dishes = new FormControl('');
  laundry = new FormControl('');
  durations: Duration[] = [
    {value: 'daily', viewValue: 'Daily'},
    {value: 'weekly', viewValue: 'Weekly'},
    {value: 'monthly', viewValue: 'Monthly'},
    {value: 'yearly', viewValue: 'Yearly'}
  ];
  rooms: Rooms[] = [
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
  floors: Floors[] = [
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
  times: Times[] = [
    {value: '1', viewValue: 'Once'},
    {value: '2', viewValue: 'Twice'},
    {value: '3', viewValue: 'Thrice'},
  ];

  constructor(fb: FormBuilder) {
    this.hireForm = fb.group({
      fullName: this.fullName,
      sweeping: this.sweeping,
      mopping: this.mopping,
      dusting: this.dusting,
      dishes: this.dishes,
      laundry: this.laundry
    });
  }

  ngOnInit(): void {
  }

}
