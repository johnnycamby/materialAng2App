import { Component } from '@angular/core';

@Component({
    templateUrl: './app/accordion/accordion.component.html'
})
export class AccordionComponent {

    panels: any[];

    selectPanel(panel: any) {
        for (let i in this.panels) {
            if (panel === this.panels[i]) {
                this.panels[i].turnOn();
            } else {
                this.panels[i].turnOff();
            }
        }
    }

    addPanel(panel: any) {
        this.panels.push(panel);

        if (this.panels.length > 0) {
            this.panels[0].turnOn();
        }
    }
}
