import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { CoreModule } from './core';
import { SharedModule } from './shared';

import { AppRoutingModule } from './app-routing.module';
import { httpInterceptorProviders } from './http-interceptors';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    SharedModule,

    AppRoutingModule
  ],
  providers: [MediaMatcher, httpInterceptorProviders/*, JwtHelperService*/],
  bootstrap: [AppComponent]
})
export class AppModule {}
