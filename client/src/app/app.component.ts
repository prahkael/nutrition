// *****************************************************************************
// Import
// *****************************************************************************

import { Component }                   from '@angular/core';
import { ViewEncapsulation }           from '@angular/core';


import { Router }                      from '@angular/router';
import { ActivatedRoute }              from '@angular/router';

// *****************************************************************************
// Component
// *****************************************************************************

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'client';

  constructor(private _router: ActivatedRoute) {
    console.log(this._router.snapshot);
  }
}

// *****************************************************************************