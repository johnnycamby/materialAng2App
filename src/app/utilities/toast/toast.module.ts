import { NgModule } from '@angular/core';
import {MdCardModule} from '@angular/material';

import { ToastComponent } from './toast.component';
import { ToastService } from './toast.service';

@NgModule({
    imports: [MdCardModule],
    declarations: [ToastComponent],
    providers: [ToastService]
})
export class ToastModule { }
