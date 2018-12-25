import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as jwtDecode from 'jwt-decode';
// import { JwtHelperService } from '@auth0/angular-jwt';

const API = 'http://localhost:8000/api';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  constructor(
    private http: HttpClient
  ) // private jwtHelperService: JwtHelperService
  {}

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(user: { email: string; password: string }): Observable<any> {
    return this.http.post(`${API}/users/login`, { user }).pipe(
      tap((response: { user }) => {
        localStorage.setItem('token', response.user.token);
      }),
      tap(val => (this.isLoggedIn = true))
    );
  }

  logout(): Observable<any> {
    this.isLoggedIn = false;
    this.eraseToken();
    return this.http
      .post(`${API}/logout`, null)
      .pipe(tap(val => (this.isLoggedIn = false)));
  }

  get token(): string {
    const token = localStorage.getItem('token');

    return token ? `Token ${token}` : null;
  }

  eraseToken() {
    localStorage.removeItem('token');
  }

  get user() {
    return jwtDecode(this.token).email;
  }

  get isAuthenticated(): boolean {
    // return this.jwtHelperService.isTokenExpired('token');
    return true;
  }
}
