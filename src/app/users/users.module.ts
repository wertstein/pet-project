import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared';
import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from './users.component';

import { UsersService } from './services/users.service';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, UsersRoutingModule],
  declarations: [UsersComponent],
  providers: [UsersService]
})
export class HeroesModule {}
