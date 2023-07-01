import { Component, Inject, NgZone, OnInit, Renderer2 } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import {v4 as uuid} from 'uuid';
import { Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userid = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  guser;
  fbuser;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    ngZone: NgZone,
    private metaService: Meta,
    @Inject(DOCUMENT) private doc: Document,
    private renderer: Renderer2
  ) { 
    window['GoogleSignIn'] = user => ngZone.run(
      () => {
        this.afterSignUp(user);
      }
    );
    window['FacebookSignIn'] = user => ngZone.run(
      () => {
        this.afterSignUp(user);
      }
    );
  }

  ngOnInit(): void {
    if (this.cookieService.get('authenticationToken') !== '') {
      this.router.navigate(['tool']);
    }
    this.metaService.addTags([
      {
        name: 'google-signin-client_id',
        content: '770275124912-hf5jbmkukk14jqaas9naalbtoe66l3u1.apps.googleusercontent.com'
      }
    ]);
    let script = this.renderer.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.defer = true;
    script.async = true;
    this.renderer.appendChild(document.body, script);

    //Facebook logic
    
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '562525844738051',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
        
      FB.AppEvents.logPageView();   
        
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  login(): void {
    this.cookieService.set('authenticationToken', uuid());
    console.log(this.route.snapshot);
    if (this.userid.value === 'admin' && this.password.value === 'admin') {
      this.router.navigate(['tool']);
    } else {
      this.displayMessage('Invalid credentials', 'center', 'top');
    }
  }

  getErrorMessage() {
    if (this.userid.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
  }

  displayMessage(message: string, hpos: any, vpos: any): void {
      this.snackBar.open(message, 'Dismiss', {
        horizontalPosition: hpos,
        verticalPosition: vpos,
        panelClass: ['snackBarErrorMessage']
      });
  }

  afterSignUp(googleUser) {
    this.guser = googleUser;
  }

  facebookLogin(facebookUser){
    this.fbuser = facebookUser;
    // FB.login((response)=>
    //     {
    //       console.log('submitLogin',response);
    //       if (response.authResponse)
    //       {
    //         this.displayMessage('login successful', 'center', 'top');
    //       }
    //        else
    //        {
    //        console.log('User login failed');
    //      }
    //   });

  }
}
