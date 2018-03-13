import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

import { Routes, RouterModule } from '@angular/router';
import { LoginInComponent } from './login-in/login-in.component';
import { RegistryComponent } from './registry/registry.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: '', component: LoginInComponent },
      { path: 'registry', component: RegistryComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    LoginComponent,
    LoginInComponent,
    RegistryComponent
  ],
  exports: [
    // LoginComponent,
    LoginInComponent,
    RegistryComponent
  ]
})
export class LoginModule { }
