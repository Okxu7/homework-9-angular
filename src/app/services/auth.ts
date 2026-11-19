// import { Service } from '@angular/core';

// @Service()
// export class Auth {}


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  currentUser: string = '';

  private users = [
    { login: 'Денис', password: '1812' },
    { login: 'Михайло', password: '1911' }
  ];

  login(username: string, password: string): boolean {
    const found = this.users.find(
      u => u.login === username && u.password === password
    );

    if (found) {
      this.currentUser = found.login;
      return true;
    }

    return false;
  }
}
