import { Component, ViewChild, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { MdSidenav, MdDialog, MdSnackBar } from '@angular/material';


import { AuthService } from './auth/auth.service';
import { MessageService } from './messages/message.service';
import { UserInfoDialog } from './auth/user-info-dialog.component';
import { ShareInfoComponent } from './share-info.component';


@Component({
    selector: 'x-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.scss']
})
export class AppComponent implements OnInit {

    @ViewChild('start') public start: MdSidenav;
    pageTitle: string = 'Xplicit Cars';
    isMobile: boolean = false;
    loading: boolean = true;

    // window resize check for the device dimenions
    @HostListener('window:resize', ['$event']) onResize(event: any) {
        this.detectDevice();
    }

    constructor(private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private messageService: MessageService,
        private dialog: MdDialog,
        private snackBar: MdSnackBar) {
        // do the subscription here to watch routing event on application start. 
        router.events.subscribe((routerEvent: Event) => { this.checkRouterEvent(routerEvent); });
    }

    /**
     ----------  Reacting routing events ------------
     - watch for some Navigation events and react to them with a spinner. 
     * @param routerEvent 
     */
    checkRouterEvent(routerEvent: Event): void {
        if (routerEvent instanceof NavigationStart) {
            this.loading = true;
        }

        if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError) {
            this.loading = false;
        }
    }

    ngOnInit(): void {
        this.detectDevice();
    }

    hideNav() {
        this.start.toggle();
    }

    // device specifications for mobile
    detectDevice() {
        if (window.innerWidth <= 800) {
            this.isMobile = true;
        } else {
            this.isMobile = false;
        }
    }

    displayMessages(): void {
        // Activate Secondary Route
        this.router.navigate([{ outlets: { popup: ['messages'] } }]);
        this.messageService.isDisplayed = true;
    }

    hideMessages(): void {
        this.router.navigate([{ outlets: { popup: null } }]);
        this.messageService.isDisplayed = false;
    }

    openDialog() {
        this.dialog.open(UserInfoDialog);
    }

    openShareBar() {
        this.snackBar.openFromComponent(ShareInfoComponent, { duration: 2000  });
    }

    logOut(): void {
        this.authService.logout();
        this.router.navigateByUrl('/welcome');
    }
}
