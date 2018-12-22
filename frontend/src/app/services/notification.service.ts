import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(public snackBar: MatSnackBar) {}

  showError(error: string) {
    this.snackBar.open(error, 'Ok', {
      duration: 3000
    });
  }
}
