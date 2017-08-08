import { Directive, ViewContainerRef } from '@angular/core';

/**
 * @Directive decorator, notice the selector name, ad-host; that's what you use to apply the 
 * directive to the element. 
 */
@Directive({
    selector: '[x-host]'
})
export class AnalyticsDirective {

    /**
     *  injects ViewContainerRef to gain access to the view container of the element that 
     *  will host the dynamically added component.
     * @param viewContainerRef 
     */
    constructor(public viewContainerRef: ViewContainerRef) { }
}
