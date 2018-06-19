import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthGuard]
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
