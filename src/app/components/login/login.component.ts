import {Component} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public credentials = {
    login: '',
    password: ''
  };

  public logged;
  public logout;

  constructor(public authService: AuthService,
    private router: Router) {
  }

  signIn() {
    return this.authService.authenticate(this.credentials).subscribe((result) => {
      if (!result) {
        this.logged = false;
      } else {
        this.logout = false;
        this.credentials = {
          login: '',
          password: ''
        };
        this.router.navigate(['/']);
      }
    });
  }

}