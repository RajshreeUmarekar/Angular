import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emailAddress = new FormControl('');
  password = new FormControl('');

  constructor(fb: FormBuilder, public dialog: MatDialog) {
    this.loginForm = fb.group({
      emailAddress: this.emailAddress,
      password: this.password
    });
  }

  ngOnInit(): void {
  }

  openUserDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
