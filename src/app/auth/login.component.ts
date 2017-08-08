import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
    templateUrl: './app/auth/login.component.html'
})
export class LoginComponent {
    errorMessage: string;
    pageTitle: string = 'Log In';

    constructor(private _authService: AuthService, private router: Router) { }

    login(loginForm: NgForm) {
        if (loginForm && loginForm.valid) {
            let userName = loginForm.form.value.userName;
            let password = loginForm.form.value.password;

            this._authService.login(userName, password);

            if (this._authService.redirectUrl) {
                this.router.navigateByUrl(this._authService.redirectUrl);
            } else {
                this.router.navigate(['/cars']);
            }
        } else {
            this.errorMessage = 'Please enter a user name and password';
        }
    }
}



