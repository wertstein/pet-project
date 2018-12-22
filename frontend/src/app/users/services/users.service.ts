import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { config } from '../../../config';
import { NotificationService } from '../../services/notification.service';
import { User } from '../../models/user';

@Injectable()
export class UsersService {
  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {}

  getDetails(id: string): Observable<any> {
    return this.http.get(`${config.api}/users/${id}`).pipe(
      map((item: any) => new User(item)),
      catchError(err => {
        this.notificationService.showError(err.message);
        throw new Error(err.message);
      })
    );
  }

  getList(): Observable<any> {
    return this.http
      .get(`${config.api}/users`)
      .pipe(map((items: any[]) => items.map(item => new User(item))));
  }
}
