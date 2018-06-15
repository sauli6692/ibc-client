import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';


const appRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: 'home', component: HomeComponent },
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class MainRoutingModule { }
