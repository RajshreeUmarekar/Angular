import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({});
 

  constructor(
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    fb: FormBuilder
  ) { 
    this.form = fb.group ({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      emailid: new FormControl('', [Validators.required, Validators.email]),
      mobileNumber: new FormControl('', [Validators.required, Validators.pattern('[1-9]{1}[0-9]{9}')]),
      password: new FormControl('', [Validators.required]),
      confirm_password: new FormControl('', [Validators.required])
    },
    { 
      validator: this.ConfirmedValidator('password', 'confirm_password')
    }
  )}

  ngOnInit(): void {
    
  }

  register(): void {
    console.log(this.route.snapshot);
  }

  getErrorMessage(field : string) {

    if (field == 'firstName' )
    {
      if(this.form.controls['firstName'].hasError('required')) {
        return 'You must enter a value';
      }
    }

    if (field == 'lastName' )
    {
      if(this.form.controls['lastName'].hasError('required')) {
        return 'You must enter a value';
      }
    }

    if (field == 'emailid')
    {
      if(this.form.controls['emailid'].hasError('required')) {
        return 'You must enter a value';
      } 
      if (this.form.controls['emailid'].hasError('email')) {
        return 'You must enter a valid email address';
      }
    }

    if (field == 'mobileNumber' )
    {
      if(this.form.controls['mobileNumber'].hasError('required')) {
        return 'You must enter a value';
      }
      if(this.form.controls['mobileNumber'].hasError('pattern')) {
        return 'You must enter a 10 digit mobile number';
      }
    }

   
    if (field == 'password' )
    {
      if(this.form.controls['password'].hasError('required')) {
        return 'You must enter a value';
      }
    }

    if (field == 'confirm_password' )
    {
      if(this.form.controls['confirm_password'].hasError('required')) {
        return 'You must enter a value';
      }
      if(this.form.controls['confirm_password'].hasError('confirmedValidator')) {
        return 'Password and Confirm Password does not match';
      }
    } 
    
    
  }

  displayMessage(message: string, hpos: any, vpos: any): void {
      this.snackBar.open(message, 'Dismiss', {
        horizontalPosition: hpos,
        verticalPosition: vpos,
        panelClass: ['snackBarErrorMessage']
      });
  }

  ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }
}
