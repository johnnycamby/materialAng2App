import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';
import {AuthGuard} from './auth-guard.service';
import {UserInfoDialog} from './user-info-dialog.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [SharedModule, RouterModule.forChild([{ path: 'login', component: LoginComponent }])],
    declarations: [LoginComponent, UserInfoDialog],
    providers: [AuthService, AuthGuard],
    entryComponents: [UserInfoDialog]
})
export class AuthModule { }
