import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, share } from 'rxjs/operators';
import * as jwtDecode from 'jwt-decode';
// import { JwtHelperService } from '@auth0/angular-jwt';

const API = 'http://localhost:8000/api';

@Injectable()
export class AuthService {
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(
    private http: HttpClient // private jwtHelperService: JwtHelperService
  ) {}

  get token(): string {
    return localStorage.getItem('token');
  }

  // get user() {
  //   return jwtDecode(this.token).email;
  // }

  // get isAuthenticated(): boolean {
  //   // return this.jwtHelperService.isTokenExpired('token');
  //   return true;
  // }

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(user: { email: string; password: string }): Observable<any> {
    return this.http.post(`${API}/users/login`, { user }).pipe(
      tap((response: { user }) => {
        localStorage.setItem('token', response.user.token);
        this.isLoginSubject.next(true);
      })
    );
  }

  logout() {
    this.eraseToken();
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable().pipe(share());
  }

  private eraseToken() {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
