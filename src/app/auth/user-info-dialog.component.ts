import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MdDialogRef, MdDatepicker } from '@angular/material';

import { MessageService } from '../messages/message.service';
import { IUser } from './user';

// declare var $: any;

// const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
    let emailControl = c.get('email');
    let confirmControl = c.get('confirmEmail');

    if (emailControl.pristine || confirmControl.pristine) {
        return null;
    }

    if (emailControl.value === confirmControl.value) {
        return null;
    }

    return { 'match': true };
}

@Component({
    selector: 'user-results-dialog',
    templateUrl: './app/auth/user-info-dialog.component.html',
    styleUrls: ['./app/auth/user-info-dialog.component.css']
})
export class UserInfoDialog implements OnInit {

    userForm: FormGroup;
    user: IUser;
    emailMessage: string;
    datePicker: MdDatepicker<Date>;


    private validationMessages = {
        required: 'Please enter an email address.',
        pattern: 'Please enter a valid email address.'
    };

    constructor(private router: Router,
        private dialogRef: MdDialogRef<UserInfoDialog>,
        private fb: FormBuilder,
        private msgService: MessageService
    ) { }

    ngOnInit(): void {

        this.dialogRef.updateSize('800px', '600px');

        this.userForm = this.fb.group({
            userName: ['', [Validators.required, Validators.minLength(3)]],
            emailGroup: this.fb.group({
                // tslint:disable-next-line:max-line-length
                email: ['', [Validators.required, Validators.pattern('/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/')]],
                confirmEmail: ['', Validators.required]
            }, { validator: emailMatcher }),
            isAdmin: true,
            notification: 'email',
            phone: '',
            startDate: [this.datePicker, [Validators.required, Validators.pattern('/(\d{1,2})[- \/](\d{1,2})[- \/](\d{4})/')]],
           // startDate: this.datePicker,
            bio: ['', [Validators.required, Validators.maxLength(256)]]

        });

        this.userForm.get('notification').valueChanges.subscribe(value => this.setNotification(value));
        const emailControl = this.userForm.get('emailGroup.email');
        emailControl.valueChanges.debounceTime(1000).subscribe(value => this.setMessage(emailControl));
    }

    setNotification(notifyVia: string): void {
        const phoneControl = this.userForm.get('phone');

        if (notifyVia === 'text') {
            phoneControl.setValidators(Validators.required);
        } else {
            phoneControl.clearValidators();
        }

        phoneControl.updateValueAndValidity();
    }

    setMessage(c: AbstractControl): void {
        this.emailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(key => this.validationMessages[key]).join(' ');
        }
    }

    displayMessages(): void {
        this.router.navigate([{ outlets: { popup: ['messages'] } }]);
        this.msgService.isDisplayed = true;
    }
}
