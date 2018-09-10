// *****************************************************************************
// Imports
// *****************************************************************************

import { NgModule }                  from '@angular/core';
import { BrowserModule }             from '@angular/platform-browser';

// *****************************************************************************

import { HttpClientModule }          from '@angular/common/http';

// *****************************************************************************

import { Routes }                    from '@angular/router';
import { RouterModule }              from '@angular/router';

// *****************************************************************************

import { ReactiveFormsModule }       from '@angular/forms';

// *****************************************************************************

import { UserProfileComponent }      from './profile/user-profile.component';
import { AuthUserComponent }         from '../auth/user/auth-user.component';

// *****************************************************************************

import { UserService }               from './user.service';

// *****************************************************************************

import { AuthGuard }                 from '../auth/guards/auth-guard.service';

// *****************************************************************************
// Locals
// *****************************************************************************

const API_URL = 'http://localhost:3000';

// *****************************************************************************
// Routes
// *****************************************************************************

const routes: Routes = [{
  path: 'user',
  children: [
    {
      path: 'profile',
      component: UserProfileComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'sign-in',
      component: AuthUserComponent
    },
    {
      path: 'sign-out',
      component: AuthUserComponent
    }
  ]
}
];


// *****************************************************************************
// Module
// *****************************************************************************

@NgModule({
  declarations: [
    AuthUserComponent,
    UserProfileComponent
  ],
  imports     : [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  providers   : [
    UserService,
    {provide: 'apiUser', useValue: `${API_URL}/user`}
  ]
})
export class UserModule {}

// *****************************************************************************