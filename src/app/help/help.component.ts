
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';
import { Help } from './help';

@Component({
    selector: 'x-help',
    templateUrl: './app/help/help.component.html'
})
export class HelpComponent implements OnInit {

    helpForm: FormGroup;
    help: Help = new Help();
    emailMessage: string;
    states: any = [
         {value: 'state-0', viewValue: 'Baden Württemberg'},
         {value: 'state-1', viewValue: 'Bavaria'},
         {value: 'state-2', viewValue: 'Berlin'},
         {value: 'state-3', viewValue: 'Brandenburg'},
         {value: 'state-4', viewValue: 'Bremen'},
         {value: 'state-5', viewValue: 'Hamburg'},
         {value: 'state-6', viewValue: 'Hesse'},
         {value: 'state-7', viewValue: 'Lower Saxony'},
         {value: 'state-8', viewValue: 'Mecklenburg Vorpommern'},
         {value: 'state-9', viewValue: 'North Rhine Westphalia'},
         {value: 'state-10', viewValue: 'Rhineland Palatinate'},
         {value: 'state-11', viewValue: 'Saarland'},
         {value: 'state-12', viewValue: 'Saxony'},
         {value: 'state-13', viewValue: 'Saxony Anhalt'},
         {value: 'state-14', viewValue: 'Schleswig Holstein'},
         {value: 'state-15', viewValue: 'Thuringia'},
    ];

    private validationMessages = {
        required: 'Please enter an email address.',
        pattern: 'Please enter a valid email address.'
    };

    constructor(private fb: FormBuilder) { }

    get addresses(): FormArray {
        return <FormArray>this.helpForm.get('addresses');
    }

    ngOnInit(): void {
        this.helpForm = this.fb.group({
            email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
            phone: '',
            notification: 'email',
            sendCatalog: true,
            addresses: this.fb.array([this.buildAddress()])
        });

        this.helpForm.get('notification').valueChanges.subscribe(value => this.setNotification(value));
        const emailControl = this.helpForm.get('email');
        emailControl.valueChanges.debounceTime(1000).subscribe(value => this.setMessage(emailControl));
    }

    buildAddress(): FormGroup {
        return this.fb.group({
            address: 'home',
            street: '',
            city: '',
            zip: ''
        });
    }

    addAddress(): void {
        this.addresses.push(this.buildAddress());
    }

    setNotification(notifyVia: string): void {
        const phoneControl = this.helpForm.get('phone');

        if (notifyVia == 'text') {
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

    save() {
        console.log(this.helpForm);
        console.log('Saved: ' + JSON.stringify(this.helpForm.value));
    }
}
