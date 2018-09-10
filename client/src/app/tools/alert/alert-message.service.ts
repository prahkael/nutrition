// *****************************************************************************
// Imports
// *****************************************************************************

import { Injectable }             from '@angular/core';

// *****************************************************************************

import { BehaviorSubject }        from 'rxjs';
import { Observable }             from 'rxjs';

// *****************************************************************************

import * as fromAlertMessage      from './alert-message';
import { approvedTypes }          from './alert-message';

// *****************************************************************************
// Service
// *****************************************************************************

@Injectable()
export class AlertMessageService {

  // *****************************************************************************
  // Public Properties
  // *****************************************************************************
  
  private _messageQueue$: BehaviorSubject<fromAlertMessage.MessageArray>;

  // *****************************************************************************
  // Private Properties
  // *****************************************************************************

  // *****************************************************************************
  // Public Methods
  // *****************************************************************************
  
  constructor() {
    this._messageQueue$ = new BehaviorSubject<fromAlertMessage.MessageArray>([]);
  }
  
  // *****************************************************************************
  
  getMessageQueue(): Observable<fromAlertMessage.MessageArray> {
    return this._messageQueue$.asObservable();
  }

  /**
   * @var type    'primary' | 'info' | 'success' | 'warning' | 'danger'
   * @var message string
   */
  addMessage(type: approvedTypes, message: string) {
    const messageQueue = this._messageQueue$.getValue();
    messageQueue.push(new fromAlertMessage.MessageObject(type, message));
    this._messageQueue$.next(messageQueue);
  }
  
  // *****************************************************************************
  
}
// *****************************************************************************