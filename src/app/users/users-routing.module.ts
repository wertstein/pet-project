import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserDetailsComponent } from './components/user-details';
import { UserListComponent } from './components/user-list';

const usersRoutes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'user/:id', component: UserDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule {}
