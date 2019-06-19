import { Component, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from './services/auth.service';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'pp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Pet Project';

  mobileQuery: MediaQueryList;

  fillerNav = [
    { title: 'Users', link: 'users' },
    { title: 'Admin', link: 'admin' },
  ];
  ioConnection;
  messages = [];
  private _mobileQueryListener: () => void;

  constructor(
    public authService: AuthService,
    private router: Router,
    private socketService: SocketService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    // this.socketService.initSocket();

    // this.socketService.onMessage().subscribe(msg => {
    //   console.log(msg);
    // });

    // setTimeout(() => {
    //   this.socketService.send('MSG from FE');
    // }, 5000);

    this.initIoConnection();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

  private initIoConnection(): void {
    this.socketService.initSocket();

    this.ioConnection = this.socketService
      .onMessage()
      .subscribe((message: any) => {
        this.messages.push(message);
      });

    this.socketService.onEvent('connect').subscribe(() => {
      console.log('connected');
    });

    this.socketService.onEvent('disconnect').subscribe(() => {
      console.log('disconnected');
    });
  }
}
