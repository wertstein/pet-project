import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDetailsComponent } from './components/user-details';
import { UserListComponent } from './components/user-list';
import { UserDetailsResolver } from './services/user-details-resolver.service';
import { UserListResolver } from './services/user-list-resolver.service';

const usersRoutes: Routes = [
  {
    path: '',
    component: UserListComponent,
    resolve: { users: UserListResolver }
  },
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
