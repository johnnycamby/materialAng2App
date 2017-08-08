import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { CarService } from './car.service';
import { ICar } from './car';

/*
  ---------- providing data with a route --------------------
  - depends on 
    - amount of data
    - scope of data sharing
    - how data is used
  
  ----- HowTo share data -----
  - use of 'Route Parameters' 
    - when a route needs a small amount of data to display content like an 'id' to display a detail/edit page.
  
  - use of 'Optional Route Parameters'
    - useful when there is need to pass optional or complex data from one route to another
  
  - use of 'Query Parameters'
    - allows one to retain small amounts of data btn routes . E.g a search on a list page can retain
      its selections when navigating to it's detail page & back again.
  
  - use of 'Route's Data Property'
    - used to pass a fixed object to a route
  
  - use of 'Route Resolver'
    - a router can call a resolver service that prefetches dynamic data for a component instead of 
      routing to a component and displaying a partial page as it gets its data, the resolver can get
      the data first & then route to the component.
      The component template the has the data needed to display.
      NB:
      - using a resolver ensures that a user does not see partial page(s) appear when waiting for data
        retrieval thus better user exprience
     ----- Implementation  -------
     - create an Angular Service
     - implement the Resolve<> generic interface specifying the type of data to retrieve as a generic parameter
     - add the resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICar> {} 
       to retrieve data
     - register this service in an Angular module.
     - configure it in the module using a 'resolve' property
     - in a component read data from the route
       - use route 'snapshot' if route never changes while on the page
         -> this.route.snapshot.data['cars'];
       - use Data Observable if route could change while on the page
         -> this.route.data.subscribe(data => this.car = data['car]);  
  
  - use of 'Angular Service'   
    - a service is independent from any route thus can be used to share data data with any components
      at any level of the route hierarchy
 */


@Injectable()
export class CarResolver implements Resolve<ICar> {

    constructor(private _carService: CarService, private _router: Router) { }

    /*
      ActivatedRouteSnapshot
      - contains info about the currently activated route
      - it can be used to retrive route & query parameters
      
      RouterStateSnapshot
      - represents the state of the application's route at a moment in time.
      - its a tree of ActivatedRouteSnapshot

      NB:
      - this method can return an Observable<ICar>, a Promise<ICar> or just data (ICar)
    */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICar> {

        let id = route.params['id'];
        if (isNaN(id)) {
            console.log(`Car id was not a number: ${id}`);
            this._router.navigate(['/cars']);
            return Observable.of(null);
        }
        return this._carService.getCar(+id).map(car => {
            if (car) {
                return car;
            }
            console.log(`Car was not found: ${id}`);
            this._router.navigate(['/cars']);
            return null;
        }).catch(error => {
            console.log(`Retrieval error: ${error}`);
            this._router.navigate(['/cars']);
            return Observable.of(null);
        });
    }


}