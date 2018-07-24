import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './main/components/not-found/not-found.component';
import { AuthGuard } from './auth/services';


const appRoutes: Routes = [
    {
        path: '',
        loadChildren: './main/main.module#MainModule',
        canLoad: [AuthGuard]
    },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false, // <-- true debugging purposes only
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }
