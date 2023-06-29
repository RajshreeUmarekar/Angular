import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

interface Duration {
  value: string;
  viewValue: string;
}
interface Hours {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-caretaker',
  templateUrl: './caretaker.component.html',
  styleUrls: ['./caretaker.component.scss']
})
export class CaretakerComponent {
  hireCaretakerForm: FormGroup;
  fullName = new FormControl('');
  gardening = new FormControl('');
  securityGuard = new FormControl('');
  maintainance = new FormControl('');
  
  durations: Duration[] = [
    {value: 'daily', viewValue: 'Daily'},
    {value: 'weekly', viewValue: 'Weekly'},
    {value: 'monthly', viewValue: 'Monthly'},
    {value: 'yearly', viewValue: 'Yearly'}
  ];
  hours: Hours[] = [
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

  constructor(fb: FormBuilder) {
    this.hireCaretakerForm = fb.group({
      fullName: this.fullName,
      gardening: this.gardening,
      securityGuard: this.securityGuard,
      maintainance: this.maintainance
    });
  }
}
