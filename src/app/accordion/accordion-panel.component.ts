import { Component, OnInit } from '@angular/core';

import { AccordionComponent } from './accordion.component';

Component({
    templateUrl: './app/accordion/accordion-panel.component.html'
})
export class AccordionPanelComponent implements OnInit {

    selected: boolean = false;
    accordion: AccordionComponent;
    heading: string = '';


    ngOnInit(): void {
        this.accordion.addPanel(this);
    }

    turnOn() {
        this.selected = true;
    }

    turnOff() {
        this.selected = false;
    }

    select() {
        this.accordion.selectPanel(this);
    }
}
