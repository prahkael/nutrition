// *****************************************************************************
// Imports
// *****************************************************************************

import { Component }                from '@angular/core';

// *****************************************************************************

import { FormGroup }                from '@angular/forms';
import { FormControl }              from '@angular/forms';


import { Router }                   from '@angular/router';

// *****************************************************************************

import { UserService }              from '../../user/user.service';


import { LoginResult }              from '../../user/user';

// *****************************************************************************
// Class
// *****************************************************************************

/**
 * Class of the UserAuthComponent.
 *
 * @class
 * @author Thomas Fuchs <thomas.fuchs@net-designer.net>
 */
@Component({
  selector: 'nutrition-auth-user',
  templateUrl: 'auth-user.component.html',
  styleUrls: ['auth-user.component.scss'],
})
export class AuthUserComponent {

  // ***************************************************************************
  // Public properties
  // ***************************************************************************

  public loginForm   : FormGroup;

  // ***************************************************************************
  // Private properties
  // ***************************************************************************

  // ***************************************************************************
  // Public methods
  // ***************************************************************************

  public constructor(
    private _userService: UserService,
    private _router:      Router
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });

    this.signOut();
  }

  signIn() {
    if (this.loginForm.value.username && this.loginForm.value.password) {
      this._userService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe((result: LoginResult) => {
        if (result.success) {
          localStorage.setItem('userId', result.id);
          this._router.navigate(['/nutrition']);
        }
      });
    }
  }

  // ***************************************************************************
  
  signOut() {
    localStorage.removeItem('userId');
  }

  // ***************************************************************************
  // Private methods
  // ***************************************************************************

  // ***************************************************************************
  // ***************************************************************************
}