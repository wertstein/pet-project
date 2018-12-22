import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

// import { SomeSingletonService } from './some-singleton/some-singleton.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [AuthService],
  // providers: [SomeSingletonService]
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
