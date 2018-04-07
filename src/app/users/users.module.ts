import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared';
import { UsersRoutingModule } from './users-routing.module';
import { UserDetailsComponent } from './components/user-details';
import { UserListComponent } from './components/user-list';
import { UsersService } from './services/users.service';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, UsersRoutingModule],
  declarations: [UserListComponent, UserDetailsComponent],
  providers: [UsersService]
})
export class UsersModule {}
