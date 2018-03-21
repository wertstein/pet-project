import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';

import { ItemsService } from './services/items.service';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'users', component: ListComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [AppComponent, ListComponent, HomeComponent, PageNotFoundComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    MaterialModule,
    ReactiveFormsModule,

    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ItemsService, MediaMatcher],
  bootstrap: [AppComponent]
})
export class AppModule {}
