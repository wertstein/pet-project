import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { User } from '../../models/user';

@Injectable()
export class UserListResolver implements Resolve<User> {
  constructor(private usersService: UsersService, private router: Router) {}

  resolve(): Observable<User> {
    return this.usersService.getList()
    .pipe(
      take(1),
      map(user => {
        if (user) {
          return user;
        } else {
          this.router.navigate(['../']);
          return null;
        }
      })
    );
  }
}
