import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './main/components/not-found/not-found.component';


const appRoutes: Routes = [
    { path: '', loadChildren: './main/main.module#MainModule' },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true, // <-- debugging purposes only
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }
