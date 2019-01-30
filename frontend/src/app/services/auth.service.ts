import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, BehaviorSubject } from 'rxjs';
import { share, map } from 'rxjs/operators';
import { User } from '../models/user';

const API = 'http://localhost:8000/api';

const TOKEN_NAME = 'token';

@Injectable()
export class AuthService {
  get loggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable().pipe(share());
  }

  get tokenExpired(): boolean {
    return this.jwtService.isTokenExpired(this.token);
  }

  private isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  private get token(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtService: JwtHelperService
  ) {}

  redirectUrl: string;

  login(user: { email: string; password: string }): Observable<any> {
    return this.http.post(`${API}/users/login`, { user }).pipe(
      map((response: { token }) => {
        localStorage.setItem(TOKEN_NAME, response.token);

        // const { email } = this.jwtService.decodeToken(response.token);

        // const user1: User = new User({ email });

        this.isLoginSubject.next(true);

        this.router.navigate([this.redirectUrl || '']);
      })
    );
  }

  logout() {
    this.eraseToken();
  }

  private eraseToken() {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
