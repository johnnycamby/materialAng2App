import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { MessageComponent } from './message.component';
import { MessageService } from './message.service';

/**
 * --------- Secondary-route --------------------
 * - used to display another routable panel of information at the same level of the primary-route hierachy
 *   thus displaying a secondary set of routes it's own router-outlet.
 * - it has it's own child-routes.
 * - it's own route parameters.
 * - it's own secondary-routes.
 * - Each secondary-route must have a name.
 * - secondary route must 've an 'outlet' property on configuring associated with the 'name'.
 * 
 * - Activate a secondary route using an object and setting its outlets property (key: outlet name, value: link parameters array)
 *   - code: this.router.navigate([{ outlets: { popup: ['messages'] } }]);
 *   - template: <a [routerLink]="[{outlets: {popup: ['messages'] }}]">Messages </a>
 * 
 * - Clear a secondary route using an object and setting its outlets property (key: outlet name, value: null)
 *   - code: this.router.navigate([{outlets: {popup: null }}]);
 *   - template: <a [routerLink]="[{outlets: {popup: null }}]">Messages </a>
 * E.g
 * - Secondary route can be used to display
 *   - a dashboard with multiple panel with each supporting multiple routes.
 *   - multi-window user interface like gmail.
 *   - panel for notes or comments display.
 *   - panel to log messages for the end-user.
 *
 */
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([{ path: 'messages', component: MessageComponent, outlet: 'popup' }])],
    declarations: [MessageComponent],
    providers: [MessageService]
})
export class MessageModule { }
