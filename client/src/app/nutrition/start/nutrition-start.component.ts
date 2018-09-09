// *****************************************************************************
// Imports
// *****************************************************************************

import { Component }                from '@angular/core';

// *****************************************************************************

import { FormGroup }                from '@angular/forms';
import { FormControl }              from '@angular/forms';

// *****************************************************************************

import { GENDER_MALE }              from '../../user/user';
import { GENDER_FEMALE }            from '../../user/user';


import { nutritionProfile }         from '../nutrition-profile';
import { calculateEnergyTurnover }  from '../nutrition-config';

// *****************************************************************************

import { UserService }              from '../../user/user.service';

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
   
  public nutritionForm   : FormGroup;

  // ***************************************************************************
  
  public nutritionProfile: nutritionProfile;
  
  // ***************************************************************************
  
  public hasCalcResult   : boolean = false;
  
  // ***************************************************************************
  
  public calcResult      : number;
  
  // ***************************************************************************

  public selectMen   = GENDER_MALE;
  public selectWomen = GENDER_FEMALE;

  // ***************************************************************************
  // Private properties
  // ***************************************************************************
   
  // ***************************************************************************
  // Public methods
  // ***************************************************************************
   
  public constructor(private _userService: UserService) {
    this.nutritionForm = new FormGroup({
      age       : new FormControl(''),
      sex       : new FormControl(GENDER_MALE),
      weight    : new FormControl(''),
      height    : new FormControl(''),
      vegetarian: new FormControl('1'),
      eatsPerDay: new FormControl('1')
    });

    this._userService.hasAuth();
  }
    
  // ***************************************************************************
  
  public onSubmit() {
    this.nutritionProfile = this.nutritionForm.value;

    const age   :number  = parseInt(this.nutritionProfile.age, 10);
    const tall  :number  = parseInt(this.nutritionProfile.height, 10);
    const weight:number  = parseInt(this.nutritionProfile.weight, 10);
    const result: number = calculateEnergyTurnover(weight, tall, age, this.nutritionProfile.sex);

    this.calcResult      = result;
    this.hasCalcResult   = true;
  }

  // ***************************************************************************
  // Private methods
  // ***************************************************************************
   
  // ***************************************************************************
  // ***************************************************************************
}