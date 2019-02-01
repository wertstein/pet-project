import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, BehaviorSubject } from 'rxjs';
import { share, map } from 'rxjs/operators';
import { User } from '../models/user';
import { config } from '../../config';

const TOKEN_NAME = 'token';

@Injectable()
export class AuthService {
  redirectUrl: string;

  get loggedIn(): Observable<User> {
    return this.isLoginSubject.asObservable().pipe(share());
  }

  get tokenExpired(): boolean {
    return this.jwtService.isTokenExpired(this.token);
  }

  private isLoginSubject = new BehaviorSubject<User>(
    !this.tokenExpired && this.user
  );

  private get token(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtService: JwtHelperService
  ) {}

  login(user: { email: string; password: string }): Observable<any> {
    return this.http.post(`${config.api}/users/login`, { user }).pipe(
      map((response: { token }) => {
        localStorage.setItem(TOKEN_NAME, response.token);

        this.isLoginSubject.next(this.user);

        this.router.navigate([this.redirectUrl || '']);
      })
    );
  }

  logout() {
    this.eraseToken();
  }

  private get user(): User {
    const { email } = this.jwtService.decodeToken(this.token);

    return new User({ email });
  }

  private eraseToken() {
    localStorage.removeItem('token');
    this.isLoginSubject.next(null);
  }
}
