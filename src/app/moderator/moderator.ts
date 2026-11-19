// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-moderator',
//   standalone: false,
//   styleUrl: './moderator.css',
//   templateUrl: './moderator.html',
// })
// export class Moderator {}


import { Component, OnInit } from '@angular/core';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-moderator',
  standalone: false,
  templateUrl: './moderator.html',
  styleUrl: './moderator.css'
})
export class Moderator implements OnInit {
  userName: string = '';

  constructor(private auth: Auth) {}

  ngOnInit(): void {
    this.userName = this.auth.currentUser;
  }
}
