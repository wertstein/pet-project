import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UsersService, User } from './users.service';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable()
export class UserDetailsResolver implements Resolve<User> {
  constructor(private usersService: UsersService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const id = +route.paramMap.get('id');

    return this.usersService.getOne(id).pipe(
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
