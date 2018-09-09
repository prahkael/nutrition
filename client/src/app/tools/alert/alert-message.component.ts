// *****************************************************************************
// Imports
// *****************************************************************************

import { Component }                from '@angular/core';

import { AlertMessageService }      from './alert-message.service';

import { BehaviorSubject }          from 'rxjs';
import { Observable }               from 'rxjs';
import * as Messages                from './alert-message';

// *****************************************************************************
// Class
// *****************************************************************************

/**
* Class of the AlertMessageComponent.
*
* @class
* @author Thomas Fuchs <thomas.fuchs@net-designer.net>
*/
@Component({
selector     : 'nutrition-alert-message',
templateUrl  : 'alert-message.component.html',
styleUrls    : ['alert-message.component.scss'],
})
export class AlertMessageComponent {
   
   // ***************************************************************************
   // Public properties
   // ***************************************************************************
   
  messageQueue$: Observable<Messages.MessageArray>;

   // ***************************************************************************
   // Private properties
   // ***************************************************************************
   
   // ***************************************************************************
   // Public methods
   // ***************************************************************************
   
  constructor(private _alertMessageService: AlertMessageService) {
    this.messageQueue$ = this._alertMessageService.getMessageQueue();
    this._alertMessageService.getMessageQueue().subscribe(message => {
      console.log('----------- aaaa');
      console.log(message);
      console.log('----------- aaaa');
    });
  }

   // ***************************************************************************
   // Private methods
   // ***************************************************************************
   
   // ***************************************************************************
   // ***************************************************************************
}