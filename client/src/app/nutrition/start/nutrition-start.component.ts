// *****************************************************************************
// Imports
// *****************************************************************************

import { Component }                from '@angular/core';

// *****************************************************************************

import { FormGroup }                from '@angular/forms';
import { FormControl }              from '@angular/forms';
import { Validators }               from '@angular/forms';

// *****************************************************************************

import { nutritionProfile }         from '../nutrition-profile';
import { calculateEnergyTurnover }  from '../nutrition-config';

// *****************************************************************************

import { UserService }              from '../../user/user.service';

import { 
  GENDER_MALE, 
  GENDER_FEMALE,
  EAT_PER_DAY,
  User 
}                                   from '../../user/user';

// *****************************************************************************
// Class
// *****************************************************************************

/**
* Class of the NutritionStartComponent.
*
* @class
* @author Thomas Fuchs <thomas.fuchs@net-designer.net>
*/
@Component({
  selector     : 'nutrition-start',
  templateUrl  : 'nutrition-start.component.html',
  styleUrls    : ['nutrition-start.component.scss'],
})
export class NutritionStartComponent {
   
  // ***************************************************************************
  // Public properties
  // ***************************************************************************
   
  nutritionForm   : FormGroup;

  // ***************************************************************************
  
  nutritionProfile: nutritionProfile;
  
  // ***************************************************************************
  
  hasCalcResult   : boolean = false;
  
  // ***************************************************************************
  
  calcResult      : number;
  
  // ***************************************************************************
  
  user            : User;
  
  // ***************************************************************************

  valuesEatPerDay : string[] = EAT_PER_DAY;
  selectMen                  = GENDER_MALE;
  selectWomen                = GENDER_FEMALE;

  // ***************************************************************************
  // Private properties
  // ***************************************************************************
   
  // ***************************************************************************
  // Public methods
  // ***************************************************************************
   
  public constructor(
    private _userService: UserService
  ) {
    this.nutritionForm = new FormGroup({
      name     : new FormControl('', [Validators.required]),
      age      : new FormControl('', [Validators.required]),
      sex      : new FormControl(this.selectMen, [Validators.required]),
      weight   : new FormControl('', [Validators.required]),
      height   : new FormControl('', [Validators.required]),
      eatPerDay: new FormControl('0', [Validators.required])
    });

    this._userService.getUserById(this._userService.getAuthUserId()).subscribe(user => {
      this.user = new User(user);
      this.nutritionForm.patchValue(user);
    });
  }
    
  // ***************************************************************************
  
  public onSubmit() {
    this.nutritionProfile = this.nutritionForm.value;

    const age   :number   = parseInt(this.nutritionProfile.age, 10);
    const tall  :number   = parseInt(this.nutritionProfile.height, 10);
    const weight:number   = parseInt(this.nutritionProfile.weight, 10);
    const result: number  = calculateEnergyTurnover(weight, tall, age, this.nutritionProfile.sex);

    this.calcResult       = result;
    this.hasCalcResult    = true;
  }

  // ***************************************************************************
  // Private methods
  // ***************************************************************************
   
  // ***************************************************************************
  // ***************************************************************************
}