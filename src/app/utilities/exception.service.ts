import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { ToastService } from './toast/toast.service';

@Injectable()
export class ExceptionService {
    constructor(private _toastService: ToastService) { }

    catchBadResponse: (errorResponse: any) => Observable<any> = (errorResponse: any) => {
        let res = <Response>errorResponse;
        let err = res.json();
        let emsg = err ? (err.error ? err.error : JSON.stringify(err)) : (res.statusText || 'unknown error');

        this._toastService.activate(`Error - Bad Response - ${emsg}`);

        return Observable.of();
    }
}
