import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { CarEditComponent } from './car-edit.component';

/*
  - canDeactivate guard:
    - checks criteria before leaving a route.
    - used:
      - check for unsaved changes.
      - confirm leaving an incomplete operation
    - called when the url chnages to a different route even when only route parameters change..    
*/

@Injectable()
export class CarEditGuard implements CanDeactivate<CarEditComponent> {

    canDeactivate(component: CarEditComponent): boolean {
        if (component.isDirty) {
            let carName = component.car.carName || 'New Car';
            return confirm(`Navigate away and lose all changes to ${carName}?`);
        }
        return true;
    }
}
