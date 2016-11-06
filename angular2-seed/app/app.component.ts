import {Component} from 'angular2/core';
import {ChangePasswordComponent} from './changepassword.component';

@Component({
    selector: 'my-app',
    template: `<div class="changePasswordForm">
                <change-password></change-password>
               </div>`,
    styles: [`
    .changePasswordForm {
    padding: 50px;
}
`],
    directives: [ChangePasswordComponent],
})
export class AppComponent { }