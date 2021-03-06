import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { JwtModule } from '@auth0/angular-jwt';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { AuthService, AuthGuard, AuthDataService } from './services';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                whitelistedDomains: ['localhost:4200'],
                blacklistedRoutes: ['localhost:4200/login/']
            }
        }),
        AuthRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [
        LoginComponent,
        ForbiddenComponent
    ],
    providers: [
        AuthGuard,
        AuthService,
        AuthDataService
    ]
})
export class AuthModule { }
