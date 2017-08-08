import { NgModule } from '@angular/core';
 // import { RouterModule, PreloadAllModules } from '@angular/router';
 import { RouterModule } from '@angular/router';

import {XplicitStrategy} from './XplicitStrategy.service';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import {AuthGuard} from './auth/auth-guard.service';
import { HelpComponent } from './help/help.component';

/**
 ----------- Lazy Loading --------
 - Asynchronous loading a feature module.
 Requirement:
 - use a feature module and must be defined in it's own feature module coz lazy-loading loads all the components
   declared in one specific Angular module
 - routes are grouped as children of a single parent route coz lazy-loading is configured on the parent
   route path and the module for that route-path is loaded asynchronously
 - the feature module must not be imported in any other module coz if a module is referenced by other module then 
   Angular l'l download and compile it thus misleading the purpose of lazy loading

NB:
 - Asynchronous loading one can delay downloading features until they are requested by the user thus
   speeding up the initial startup time of the application.
 - lazy-loading is mainly good for features that ain't often accessed or are accessed by a specific user(s)

 canLoad guard:
 - used when working with lazy-loading 
 - checks criteria before loading an asynchronous route thus module won't be downloaded unless the guard
   requirements are met.
   - great for security as no one accept authorized users l'l be able to see the source code coz it won't be
     downloaded.
   - prevents loading a route if a user cann't access it. 

Preloading Feature Modules:
- lazy loading has a down-side depending on a user's downloading speed, it may cause a delay when navigating to 
  the first route that kicks off the download of the feature-component
Solution (Preloading/Eager lazy-loading):
- preload feature module(s) behind the scenes while the user is interacting with the application 
Preload Strategies:
- No Preloading
  - that is default lazy-loading were feature module(s) are loaded on demand when a user navigates to a route
    configured for lazy-loading.
  - Preload all
    - that preloads all loaded lazy-loading feature modules
  - Custom
    - that allows one to define his/her own preload strategy as to define which module preload when.

 */


const ROUTES = [
    { path: 'welcome', component: WelcomeComponent },
    {path: 'help', component: HelpComponent},
    // 'AuthGuard' added to the parent route l'l apply to all the children routes
    // {path: 'cars',  canActivate: [AuthGuard], data: {preload: true}, loadChildren: 'app/car/car.module#CarModule' },
     {path: 'cars',  canLoad: [AuthGuard], data: {preload: true}, loadChildren: 'app/car/car.module#CarModule' },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

/**
  --------------- Routing Events ----------------
  - generate by the router when a user navigates in an application
  - they can be used to monitor, troubleshoot or perform-logic
  NavigationStart : triggered when navigation starts
  RoutesRecognized : triggered when a router has found a valid path in the configuration that matches the past url
  NavigationEnd : triggered when navigation ends successfully
  NavigationCancel : triggered when navigation is canceled e.g by a routing-guard or redirect
  NavigationError: triggered when navigation fails

  - enable tracing 'enableTracing' to see the above event occur in the root route-configuration
 */
@NgModule({
    // imports: [RouterModule.forRoot(ROUTES, { enableTracing: true, preloadingStrategy: PreloadAllModules })],
    imports: [RouterModule.forRoot(ROUTES, { enableTracing: true, preloadingStrategy: XplicitStrategy })],
    providers: [XplicitStrategy],
    exports: [RouterModule]
})
export class AppRoutingModule { }
