// *****************************************************************************
// Imports
// *****************************************************************************

import { Component }              from '@angular/core';

// *****************************************************************************

import { FormGroup }              from '@angular/forms';
import { FormControl }            from '@angular/forms';

// *****************************************************************************

import { UserService }            from '../user.service';
import { AlertMessageService }    from '../../tools/alert/alert-message.service';

// *****************************************************************************

import { 
  GENDER_MALE, 
  GENDER_FEMALE,
  EAT_PER_DAY,
  User 
}                                 from '../user';

// *****************************************************************************
// Class
// *****************************************************************************

/**
* Class of the UserProfileComponent.
*
* @class
* @author Thomas Fuchs <thomas.fuchs@net-designer.net>
*/
@Component({
  selector   : 'nutrition-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls  : ['user-profile.component.scss'],
})
export class UserProfileComponent {

  // ***************************************************************************
  // Public properties
  // ***************************************************************************

  profileForm    : FormGroup;

  selectMen      : string   = GENDER_MALE;
  selectWomen    : string   = GENDER_FEMALE;

  valuesEatPerDay: string[] = EAT_PER_DAY;

  user           : User;

  // ***************************************************************************
  // Private properties
  // ***************************************************************************

  // ***************************************************************************
  // Public methods
  // ***************************************************************************

  constructor(
    private _user               : UserService,
    private _alertMessageService: AlertMessageService
  ) {
    this.profileForm = new FormGroup({
      name     : new FormControl(),
      age      : new FormControl(),
      sex      : new FormControl(this.selectMen),
      weight   : new FormControl(),
      height   : new FormControl(),
      eatPerDay: new FormControl('0')
    });

    this._user.getUserById(this._user.getAuthUserId()).subscribe(user => {
      this.user = new User(user);
      this.profileForm.patchValue(user);
    });
  }

  onSubmit() {
    const user = { ...this.user, ...this.profileForm.value };
    this._user.updateUser(user, this._user.getAuthUserId()).subscribe();
    this._alertMessageService.addSuccessMessage('Eyjooooo, es hat geklappt');
  }

  // ***************************************************************************
  // Private methods
  // ***************************************************************************

  // ***************************************************************************
  // ***************************************************************************
}