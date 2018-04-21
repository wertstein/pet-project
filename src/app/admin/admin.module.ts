import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { AuthGuardService } from '../guards/auth-guard.service';

@NgModule({
  imports: [CommonModule, AdminRoutingModule],
  declarations: [AdminDashboardComponent, AdminComponent, ManageUsersComponent],
  providers: [AuthGuardService]
})
export class AdminModule {}
