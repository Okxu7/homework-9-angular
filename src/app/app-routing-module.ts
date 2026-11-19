import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Products } from './products/products';
//const routes: Routes = [];  Масив порожній за умовою Завдання 1
 
import { Login } from './login/login';
import { Moderator } from './moderator/moderator';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () => import('./about/about-module').then(m => m.AboutModule)
  },
  { path: 'products', component: Products },
  { path: 'products/:color', component: Products },
  { path: 'login', component: Login },
  { path: 'moderator', component: Moderator }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

 