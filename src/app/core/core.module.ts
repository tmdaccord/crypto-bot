import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatMenuModule, MatToolbarModule} from '@angular/material';
import {AppRoutingModule} from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { UserAgreementComponent } from './user-agreement/user-agreement.component';
import {CoreRoutingModule} from './core-routing.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptorService} from '../auth/auth-interceptor.service';


@NgModule({
  declarations: [HeaderComponent, HomeComponent, FooterComponent, UserAgreementComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    CoreRoutingModule,
    MatToolbarModule,
    MatMenuModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule { }
