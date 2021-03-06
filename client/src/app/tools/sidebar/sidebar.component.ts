// *****************************************************************************
// Imports
// *****************************************************************************

import { Component }              from '@angular/core';
import { Input }                  from '@angular/core';

// *****************************************************************************

import { aSidebar }               from './sidebar';

// *****************************************************************************
// Class
// *****************************************************************************

/**
* Class of the SidebarComponent.
*
* @class
* @author Thomas Fuchs <thomas.fuchs@net-designer.net>
*/
@Component({
  selector   : 'nutrition-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls  : ['sidebar.component.scss'],
})
export class SidebarComponent {

  // ***************************************************************************
  // Public properties
  // ***************************************************************************
  
  sidebarRoutes  = aSidebar;
  
  // ***************************************************************************
  
  @Input()
  source: string = 'user';

  // ***************************************************************************
  // Private properties
  // ***************************************************************************

  // ***************************************************************************
  // Public methods
  // ***************************************************************************

  constructor() {
    this.sidebarRoutes = aSidebar[this.source];
  }

  // ***************************************************************************
  // Private methods
  // ***************************************************************************

  // ***************************************************************************
  // ***************************************************************************
}