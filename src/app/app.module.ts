import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './main/components/home/home.component';
import { NotFoundComponent } from './main/components/not-found/not-found.component';


@NgModule({
    imports: [
        BrowserModule,
        AuthModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        NotFoundComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
