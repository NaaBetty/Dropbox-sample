import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { environment } from 'src/app/env.config/environment';


const apiUrl = environment.apiUrl
const googleClientId =environment.googleClientId

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: any;
  loggedIn: any;
environment: any;


  constructor(private authService: SocialAuthService) { }

  signInWithGoogle(): void {
    console.log('Button clicked'); 
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user: SocialUser) => {
        console.log('User signed in', user); 
      })
      .catch(error => {
        console.error('Authentication error', error); 
      });
  }
  

}
