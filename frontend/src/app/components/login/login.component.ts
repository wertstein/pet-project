import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message: string;

  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public authService: AuthService
  ) {
    this.setMessage();
  }

  ngOnInit() {
    this.form = this.fb.group(
      {
        email: ['user1@example.com', Validators.email],
        password: ['Password1', Validators.required]
      }
    );
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login(this.form.value).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl
          ? this.authService.redirectUrl
          : '/admin';

        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }

  logout() {
    this.authService.logout()
      .subscribe();
    this.setMessage();
  }
}
