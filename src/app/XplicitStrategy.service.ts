import { Injectable } from '@angular/core';
import { Route, PreloadingStrategy } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
/**
 preload the Car feature modules
 */
@Injectable()
export class XplicitStrategy implements PreloadingStrategy {

    preload(route: Route, load: Function): Observable<any> {
        if (route.data && route.data['preload']) {
            return load();
        }

        return Observable.of(null);
    }
}
