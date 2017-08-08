import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanLoad, Router, Route } from '@angular/router';

import { AuthService } from './auth.service';

/*
 -------- Route Guards -----------------
 - limit access to a route(s) thus making a route(s) accessible to specific users like 
   - an admin 
   - login before using an application
   - warm a user before leaving a route like asking a user to save before navigation away to another page
   - retrieve data before accessing a route

 - Guard Processing:
   - router first executes the 'canDeactivate-guard' for the current route to determine if a user can leave that route.
     if a future module is loaded asynchronously then the 'canLoad-guard' is checked before the module is loaded
     then the route checks the 'canActivateChild-guard(s)' and then the 'canActivate-guard(s)' and after
     all other guard(s) are checked then the resolver(s) are executed
   NB
    - don't execute a resolver & retrieve data for a route until one is certain that a user can access that route
    - if any guard returns 'false' all pending guards are canceled and the requested navigation is canceled
  
  - canActivateChild guard:
    - called when a child of a route is activated and not the route itself
    - used to limit access to child routes as it ensures prerequisites for child routes are met
    - it's called any time the url changes and matches the associated child route even when only route 
      parameters change.
   NB 
   - canActivate guard l'l not re-execute if only the child route is changed 
    - checks criteria before activating a child route.  
*/

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    constructor(private authService: AuthService, private router: Router) { }

    canLoad(route: Route): boolean {
        return this.checkLoggedIn(route.path);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkLoggedIn(state.url);
    }

    checkLoggedIn(url: string): boolean {
        if (this.authService.isLoggedIn()) {
            return true;
        }

        // help with sharing data
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    }
}
