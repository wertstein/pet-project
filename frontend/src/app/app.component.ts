import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'Pet Project';

  mobileQuery: MediaQueryList;

  fillerNav = [
    { title: 'Users', link: 'users' },
    { title: 'Admin', link: 'admin' },
  ];

  private _mobileQueryListener: () => void;

  constructor(
    public authService: AuthService,
    private router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
