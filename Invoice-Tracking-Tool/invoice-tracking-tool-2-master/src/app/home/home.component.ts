import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  login(): void {
    console.log("Login Clicked");
    this.router.navigate(['login']);
  }

  register(): void {
    console.log("Register Clicked");
    this.router.navigate(['register']);
  }

}
