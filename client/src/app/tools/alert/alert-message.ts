// *****************************************************************************
// Constance
// *****************************************************************************

const primaryMessage = 'primary';
const infoMessage    = 'info';
const successMessage = 'success';
const warningMessage = 'warning';
const dangerMessage  = 'danger';


export const ALERT_MESSAGE_PRIMARY = 0;
export const ALERT_MESSAGE_INFO    = 1;
export const ALERT_MESSAGE_SUCCESS = 2;
export const ALERT_MESSAGE_WARNING = 3;
export const ALERT_MESSAGE_DANGER  = 4;

export const messageClasses = [];
messageClasses[ALERT_MESSAGE_PRIMARY] = primaryMessage;
messageClasses[ALERT_MESSAGE_INFO]    = infoMessage;
messageClasses[ALERT_MESSAGE_SUCCESS] = successMessage;
messageClasses[ALERT_MESSAGE_WARNING] = warningMessage;
messageClasses[ALERT_MESSAGE_DANGER]  = dangerMessage;

export class MessageObject {
  message     : string;
  messageClass: string;

  constructor(message: string, messageClass: string) {
    this.message      = message;
    this.messageClass = messageClass;
  }
}

export type MessageArray = MessageObject[];