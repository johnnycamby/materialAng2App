import { Injectable } from '@angular/core';
import { IUser } from './user';
import { MessageService } from '../messages/message.service';

@Injectable()
export class AuthService {
    currentUser: IUser;
    redirectUrl: string;

    constructor(private _messageService: MessageService) { }

    isLoggedIn(): boolean {
        return !!this.currentUser;
    }

    login(userName: string, password: string): void {
        if (!userName || !password) {
            this._messageService.addMessage('Please enter your userName and password');
            return;
        }
        if (userName === 'admin') {
            this.currentUser = {
                id: 1,
                userName: userName,
                isAdmin: true,
                email: 'admin@tec247.net',
                startDate: new Date(),
                bio: 'young and ambitious full service design and technology company. ' +
                'Our focus is JavaScript development and User Interface design.'

            };
            this._messageService.addMessage('Admin login');
            return;
        }
        this.currentUser = {
            id: 2,
            userName: userName,
            isAdmin: false,
            email: '',
            startDate: new Date(),
            bio: ''
        };
        this._messageService.addMessage(`User: ${this.currentUser.userName} logged in`);
    }

    logout(): void {
        this.currentUser = null;
    }
}
