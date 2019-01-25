import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (this.authService.token) {
      const authReq = req.clone({
        headers: req.headers.set(
          'Authorization',
          `Token ${this.authService.token}`
        )
      });

      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
