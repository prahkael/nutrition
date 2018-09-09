// *****************************************************************************
// Constance
// *****************************************************************************

export const GENDER_MALE   = 'male';

// *****************************************************************************

export const GENDER_FEMALE = 'female';

export const EAT_PER_DAY   = [
  'Bitte auswählen',
  '3x täglich',
  '4x täglich',
  '5x täglich',
  '6x täglich',
];

// *****************************************************************************
// Interfaces
// *****************************************************************************

export interface LoginResult {
  success: boolean,
  id: string
}

// *****************************************************************************

export interface iUser {
  id?       : string,
  name      : string,
  password  : string,
  age?      : string,
  sex?      : string,
  weight?   : string,
  height?   : string,
  eatPerDay?: string
}

// *****************************************************************************

export class User implements iUser {
  id?       : string;
  name      : string;
  password  : string;
  age?      : string;
  sex?      : string;
  weight?   : string;
  height?   : string;
  eatPerDay?: string;
  
  constructor(user: iUser) {
    
    this.name     = user.name;
    this.password = user.password;
    
    if (user.id) {
      this.id = user.id;
    }
    if (user.age) {
      this.age = user.age;
    }
    if (user.sex) {
      this.sex = user.sex;
    }
    if (user.weight) {
      this.weight = user.weight;
    }
    if (user.height) {
      this.height = user.height;
    }
    if (user.eatPerDay) {
      this.eatPerDay = user.eatPerDay
    }
  }
  
}

// *****************************************************************************