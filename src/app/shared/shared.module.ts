import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class SharedModule { }
