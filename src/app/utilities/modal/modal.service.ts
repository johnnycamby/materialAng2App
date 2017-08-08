import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';

@Injectable()
export class ModalService {
    //activate: (message?: string, title?: string) => Promise<boolean>;

    activate: (message?: string, title?: string) => Promise<boolean> = (message, title) => {
    return Promise.resolve(true);
}
}
