import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { AuthGuard } from './services';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'forbidden',
        component: ForbiddenComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AuthRoutingModule { }
