// *****************************************************************************
// Imports
// *****************************************************************************

import { Injectable }                  from '@angular/core';
import { CanActivate }                 from '@angular/router';

import { 
  Router, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot 
}                                      from '@angular/router';

// *****************************************************************************

import { UserService }                 from '../../user/user.service';

// *****************************************************************************
// Guard
// *****************************************************************************

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _userService: UserService,
    private userService: UserService, 
    private router: Router
  ) { }

  canActivate() {

    const userId = this._userService.getAuthUserId();

    if (!!userId) {
      return true;
    } else {
      this.router.navigate(['/user/sign-in']);
      return false;
    }
  }
}