import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserDetailsComponent } from './components/user-details';
import { UserListComponent } from './components/user-list';
import { UserDetailsResolver } from './services/user-details-resolver.service';

const usersRoutes: Routes = [
  { path: '', component: UserListComponent },
  {
    path: ':id',
    component: UserDetailsComponent,
    resolve: { user: UserDetailsResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
