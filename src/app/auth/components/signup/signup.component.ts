import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
  ]
})
export class SignupComponent implements OnInit {

  signupInfo: any = {
    email: 'eve.holt@reqres.in',
    password: 'pistol'
  };

  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signupHandler(signupFormData): void{
    console.log(signupFormData.value);
    this.authService.signup(signupFormData.value)
      .subscribe( (res: any) => {
        console.log(res);
        alert('Signup successful! Redirecting to Login Page...');
        this.router.navigate(['login']);
      });

  }

}
