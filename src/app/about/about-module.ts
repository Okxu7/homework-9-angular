// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { About } from './about/about';

// @NgModule({
//   declarations: [About],
//   imports: [CommonModule],
// })
// export class AboutModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { About } from './about/about';

const routes: Routes = [
  // { path: 'about', component: About  }
  // Замініть path: 'about' на порожній рядок '' (бо адресу 'about' тепер задаватиме головний роутер). 

{ path: '', component: About  }

];

@NgModule({
  declarations: [About ],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AboutModule {}
