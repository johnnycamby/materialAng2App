import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { SharedModule } from './../../shared/shared.module';
import {ModalComponent} from './modal.component';
import {ModalService} from './modal.service';

@NgModule({
    imports: [SharedModule,
    RouterModule.forChild([{path: 'modal', component: ModalComponent, outlet: 'modal'}])
    ],
    exports: [ModalComponent],
    declarations: [ModalComponent],
    providers: [ModalService]
})
export class ModalModule { }

