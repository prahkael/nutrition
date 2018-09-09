// *****************************************************************************
// Imports
// *****************************************************************************

import { NgModule }                  from '@angular/core';
import { BrowserModule }             from '@angular/platform-browser';

// *****************************************************************************

import { Routes }                    from '@angular/router';
import { RouterModule }              from '@angular/router';

// *****************************************************************************

import { ReactiveFormsModule }       from '@angular/forms';

// *****************************************************************************

import { AuthGuard }                 from '../auth/guards/auth-guard.service';

// *****************************************************************************

import { NutritionStartComponent }   from './start/nutrition-start.component';

// *****************************************************************************
// Routes
// *****************************************************************************

const routes: Routes = [{
  path: 'nutrition',
  children: [
    {
      path: 'start',
      component: NutritionStartComponent,
      canActivate: [AuthGuard]
    }
  ]
}
];

// *****************************************************************************
// Module
// *****************************************************************************

@NgModule({
  declarations: [
    NutritionStartComponent
  ],
  imports     : [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    BrowserModule
  ],
  providers   : []
})
export class NutritionModule { }

// *****************************************************************************