// import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing-module';
// import { App } from './app';

// @NgModule({
//   declarations: [
//     App
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [
//     provideBrowserGlobalErrorListeners(),
//   ],
//   bootstrap: [App]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Додаємо для 4завдання

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeModule } from './home/home-module';
//import { AboutModule } from './about/about-module'; Якщо залишити AboutModule тут, Angular завантажить його одразу при відкритті сайту, і ліниве завантаження не спрацює.  для 2завдання

// Додаємо для 4завдання
import { Products } from './products/products';
import { Login } from './login/login';
import { Moderator } from './moderator/moderator'; 

@NgModule({
  declarations: [App, Products, Login, Moderator],
  imports: [
    BrowserModule,
    FormsModule, // <--Додаємо для 4завдання
    HomeModule,
    // AboutModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}
