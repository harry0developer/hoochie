import { Component } from '@angular/core'; 
import { AUTH_TYPE } from 'src/app/utils/const';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-siginin',
  templateUrl: 'signin.page.html',
  styleUrls: ['signin.page.scss']
})
export class SigninPage {

  loginData = {
    email: "",
    passoword: ""
  };

  constructor(public authService: AuthService) {}

  login(type:string) {
    if(type == AUTH_TYPE.google) {
      this.authService.GoogleAuth().then(user => {
        console.log(user);
      })
    } else if(type == AUTH_TYPE.email) {
      this.authService.SignIn(this.loginData.email, this.loginData.passoword).then(user => {
        console.log(user);
      })
    }  else if(type == AUTH_TYPE.phone) {
      // this.authService. .then(user => {
      //   console.log(user);
      // })
    }  
  }

}
 
