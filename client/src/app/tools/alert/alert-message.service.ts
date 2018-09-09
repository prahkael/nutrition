// *****************************************************************************
// Imports
// *****************************************************************************

import { Injectable }             from '@angular/core';

// *****************************************************************************

import { BehaviorSubject }        from 'rxjs';
import { Observable }             from 'rxjs';

// *****************************************************************************

import * as Messages              from './alert-message';

// *****************************************************************************
// Service
// *****************************************************************************

@Injectable()
export class AlertMessageService {

  // *****************************************************************************
  // Public Properties
  // *****************************************************************************
  
  private _messageQueue : Messages.MessageArray;
  private _messageQueue$: BehaviorSubject<Messages.MessageArray>;

  // *****************************************************************************
  // Private Properties
  // *****************************************************************************

  // *****************************************************************************
  // Public Methods
  // *****************************************************************************
  
  constructor() {
    this._messageQueue  = [];
    this._messageQueue$ = new BehaviorSubject<Messages.MessageArray>(this._messageQueue);
  }
  
  // *****************************************************************************
  
  addPrimaryMessage(message: string) {
    this._addMessage(Messages.ALERT_MESSAGE_PRIMARY, message);
  }
  
  // *****************************************************************************
  
  addInfoMessage(message: string) {
    this._addMessage(Messages.ALERT_MESSAGE_INFO, message);
  }
  
  // *****************************************************************************
  
  addSuccessMessage(message: string) {
    this._addMessage(Messages.ALERT_MESSAGE_SUCCESS, message);
  }
  
  // *****************************************************************************
  
  addWarningMessage(message: string) {
    this._addMessage(Messages.ALERT_MESSAGE_SUCCESS, message);
  }
  
  // *****************************************************************************
  
  addDangerMessage(message: string) {
    this._addMessage(Messages.ALERT_MESSAGE_DANGER, message);
  }
  
  // *****************************************************************************
  
  getMessageQueue(): Observable<Messages.MessageArray> {
    return this._messageQueue$.asObservable();
  }

  // *****************************************************************************
  // Private Methods
  // *****************************************************************************
  
  private _addMessage(type: number, message: string) {
    this._messageQueue.push(new Messages.MessageObject(message, Messages.messageClasses[type]));
    this._messageQueue$.next(this._messageQueue);
  }
  
  // *****************************************************************************
  
}
// *****************************************************************************