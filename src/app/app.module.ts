import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainModule } from './main/main.module';

import { AppComponent } from './app.component';
// import { MainComponent } from './main/main.component';
import { LoginModule } from './login/login.module';

export const ROUTES: Routes = [
  { path: '', loadChildren: './main/main.module#MainModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' }
];

@NgModule({
  declarations: [
    AppComponent,
    // MainComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    RouterModule.forRoot(ROUTES),
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
