import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';




import 'hammerjs';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CarData } from './car/car-data';

import { AppComponent } from './app.component';
import {HelpComponent} from './help/help.component';
import { AuthModule } from './auth/auth.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { WelcomeComponent } from './home/welcome.component';
import { ShareInfoComponent } from './share-info.component';

import { AppRoutingModule } from './app-routing.module';
import { ToastModule } from './utilities/toast/toast.module';
import { ModalModule } from './utilities/modal/modal.module';
import { MessageModule } from './messages/message.module';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpModule,
    MaterialModule,
    InMemoryWebApiModule.forRoot(CarData, { delay: 1000 }),

    ToastModule, ModalModule, AuthModule,
    MessageModule, AppRoutingModule, BrowserAnimationsModule],
  declarations: [AppComponent, HelpComponent, ShareInfoComponent, WelcomeComponent, PageNotFoundComponent],
  entryComponents: [ShareInfoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

