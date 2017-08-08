"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/of");
require("rxjs/add/operator/map");
var car_service_1 = require("./car.service");
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
var CarResolver = (function () {
    function CarResolver(_carService, _router) {
        this._carService = _carService;
        this._router = _router;
    }
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
    CarResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.params['id'];
        if (isNaN(id)) {
            console.log("Car id was not a number: " + id);
            this._router.navigate(['/cars']);
            return Observable_1.Observable.of(null);
        }
        return this._carService.getCar(+id).map(function (car) {
            if (car) {
                return car;
            }
            console.log("Car was not found: " + id);
            _this._router.navigate(['/cars']);
            return null;
        }).catch(function (error) {
            console.log("Retrieval error: " + error);
            _this._router.navigate(['/cars']);
            return Observable_1.Observable.of(null);
        });
    };
    return CarResolver;
}());
CarResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [car_service_1.CarService, router_1.Router])
], CarResolver);
exports.CarResolver = CarResolver;
//# sourceMappingURL=car-resolver.service.js.map