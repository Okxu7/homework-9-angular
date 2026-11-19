// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   standalone: false,
//   styleUrl: './login.css',
//   templateUrl: './login.html',
// })
// export class Login {}


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private auth: Auth, private router: Router) {}

  onLogin(): void {
    const isSuccess = this.auth.login(this.username.trim(), this.password.trim());

    if (isSuccess) {
      this.errorMessage = '';
      this.router.navigate(['/moderator']);
    } else {
      this.errorMessage = 'Невірний логін або пароль!';
    }
  }
}
