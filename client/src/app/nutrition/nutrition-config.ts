// *****************************************************************************
// Config Values
// *****************************************************************************

export const NUTRITUIN_MAN   = 'male';

// *****************************************************************************

export const NUTRITUIN_WOMAN = 'female';

// *****************************************************************************
// Functions
// *****************************************************************************

export function calculateEnergyTurnover(weight, tall, age, sex) {
  
  let result : number = 0;
  let value  : number;
  
  switch(sex) {
    case NUTRITUIN_MAN  : {
      result  = parseFloat((66.47 + (13.7 * weight) + (5 * tall) - (6.8 * age)).toFixed(2));
      break;
    }
    case NUTRITUIN_WOMAN: {
      result  =  parseFloat((655.1 + (9.6 * weight) + (5 * tall) - (6.8 * age)).toFixed(2));
      break;
    }
  }
  
  return result;
}

// *****************************************************************************