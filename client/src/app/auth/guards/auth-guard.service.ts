// *****************************************************************************
// Imports
// *****************************************************************************

import { Injectable }                  from '@angular/core';

// *****************************************************************************

import { CanActivate }                 from '@angular/router';

// *****************************************************************************

import { Router }                      from '@angular/router';

// *****************************************************************************

import { UserService }                 from '../../user/user.service';

// *****************************************************************************
// Guard
// *****************************************************************************

@Injectable()
export class AuthGuard implements CanActivate {

  // ***************************************************************************
  // Public Properties
  // ***************************************************************************
  
  // ***************************************************************************
  // Private Properties
  // ***************************************************************************

  // ***************************************************************************
  // Public Methods
  // ***************************************************************************
  
  constructor(
    private _userService: UserService,
    private router: Router
  ) { }
  
  // *****************************************************************************
  
  canActivate() {
    
    const userId = this._userService.getAuthUserId();
    
    if (!!userId) {
      return true;
    } else {
      this.router.navigate(['/user/sign-in']);
      return false;
    }
    
  }

  // ***************************************************************************
  // Private Methods
  // ***************************************************************************

}

// *****************************************************************************