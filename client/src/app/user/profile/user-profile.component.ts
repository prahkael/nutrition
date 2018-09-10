// *****************************************************************************
// Imports
// *****************************************************************************

import { Component }              from '@angular/core';

// *****************************************************************************

import { FormGroup }              from '@angular/forms';
import { FormControl }            from '@angular/forms';
import { Validators }             from '@angular/forms';

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
  
  // ***************************************************************************
  
  selectMen      : string   = GENDER_MALE;
  selectWomen    : string   = GENDER_FEMALE;
  
  // ***************************************************************************
  
  valuesEatPerDay: string[] = EAT_PER_DAY;
  
  // ***************************************************************************
  
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
      name     : new FormControl('', [Validators.required]),
      age      : new FormControl('', [Validators.required]),
      sex      : new FormControl(this.selectMen, [Validators.required]),
      weight   : new FormControl('', [Validators.required]),
      height   : new FormControl('', [Validators.required]),
      eatPerDay: new FormControl('0', [Validators.required])
    });
    
    this._user.getUserById(this._user.getAuthUserId()).subscribe(user => {
      this.user = new User(user);
      this.profileForm.patchValue(user);
    });
  }
  
  // ***************************************************************************
  
  onSubmit() {
    if (this.profileForm.get('name').errors) {
      this._alertMessageService.addMessage('danger', 'Der Name muss ausgefüllt sein');
    }
    if (this.profileForm.get('age').errors) {
      this._alertMessageService.addMessage('danger', 'Das Alter muss ausgefüllt sein');
    }
    if (this.profileForm.get('sex').errors) {
      this._alertMessageService.addMessage('danger', 'Bitte wählen Sie ein Geschlecht aus');
    }
    if (this.profileForm.get('weight').errors) {
      this._alertMessageService.addMessage('danger', 'Das Gewicht muss angegeben sein');
    }
    if (this.profileForm.get('height').errors) {
      this._alertMessageService.addMessage('danger', 'Die Größe muss angegeben sein');
    }
    if (this.profileForm.get('eatPerDay').errors) {
      this._alertMessageService.addMessage('danger', 'Bitte geben Sie an, wie oft am Tag Sie essen möchten');
    }
    if (this.profileForm.valid) {
      const user = { ...this.user, ...this.profileForm.value };
      this._user.updateUser(user, this._user.getAuthUserId()).subscribe();
      this._alertMessageService.addMessage('success', 'Profil wurde erfolgreich gespeichert');
    }
  }

  // ***************************************************************************
  // Private methods
  // ***************************************************************************

  // ***************************************************************************
  // ***************************************************************************
}