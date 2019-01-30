import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard.service';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsResolver } from './services/user-details-resolver.service';
import { UserListResolver } from './services/user-list-resolver.service';

const usersRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class UsersRoutingModule {}
