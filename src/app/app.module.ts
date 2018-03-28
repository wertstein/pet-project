import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MediaMatcher } from '@angular/cdk/layout';

import { ItemsService } from './services/items.service';

import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core.module';
import { SharedModule } from './shared.module';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, ListComponent, HomeComponent, PageNotFoundComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [ItemsService, MediaMatcher],
  bootstrap: [AppComponent]
})
export class AppModule {}
