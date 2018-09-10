// *****************************************************************************
// Types
// *****************************************************************************

export type approvedTypes = 'primary' | 'info' | 'success' | 'warning' | 'danger';

// *****************************************************************************

export type MessageArray  = MessageObject[];

// *****************************************************************************
// Classes
// *****************************************************************************

export class MessageObject {
  message     : string;
  messageClass: string;
  
  constructor(messageClass: string, message: string) {
    this.message      = message;
    this.messageClass = messageClass;
  }
}

// *****************************************************************************