import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdInputModule, MdCardModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import { AccordionModule } from 'ngx-accordion';
// import {SqueezeBoxModule} from 'squeezebox';

import { StarComponent } from './star.component';

@NgModule({
  imports: [CommonModule, MdCardModule, MdInputModule, MdDatepickerModule, MdNativeDateModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdDatepickerModule, 
    MdNativeDateModule,
    MdCardModule,
    MdInputModule,
    // SqueezeBoxModule,
    AccordionModule,
    StarComponent
  ],

  declarations: [StarComponent]
})
export class SharedModule { }
