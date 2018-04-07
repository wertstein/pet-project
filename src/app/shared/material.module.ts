import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTableModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
  ]
})
export class MaterialModule {}
