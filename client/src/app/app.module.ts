// *****************************************************************************
// Import
// *****************************************************************************

import { BrowserModule }             from '@angular/platform-browser';
import { NgModule }                  from '@angular/core';

// *****************************************************************************

import { Routes }                    from '@angular/router';
import { RouterModule }              from '@angular/router';

// *****************************************************************************

import { AppComponent }              from './app.component';
import { NavbarComponent }           from './tools/navbar/navbar.component';
import { HomeComponent }             from './home/home.component';
import { AlertMessageComponent }     from './tools/alert/alert-message.component';

// *****************************************************************************

import { NutritionModule }           from './nutrition/nutrition.module';
import { UserModule }                from './user/user.module';


import { AlertMessageService }       from './tools/alert/alert-message.service';


import { AuthGuard }                 from './auth/guards/auth-guard.service';

// *****************************************************************************
// Routes
// *****************************************************************************

const route: Routes = [{
  path: '',
  component: HomeComponent,
  canActivate: [AuthGuard]
},{
  path: 'nutrition',
  loadChildren: './nutrition/nutrition.module#NutritionModule',
  canActivate: [AuthGuard]
},{
  path: 'user',
  loadChildren: './user/user.module#UserModule'
}];

// *****************************************************************************
// Module
// *****************************************************************************

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AlertMessageComponent
  ],
  imports: [
    BrowserModule,
    NutritionModule,
    UserModule,
    RouterModule.forRoot(route)
  ],
  providers: [
    AuthGuard,
    AlertMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// *****************************************************************************