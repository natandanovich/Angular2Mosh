import {Component} from 'angular2/core';
import {ControlGroup,Validators,FormBuilder} from 'angular2/common';
import {PasswordValidators} from './passwordValidator';


@Component({
    selector: 'change-password',
    templateUrl: './app/changepassword.component.html'
})
export class ChangePasswordComponent{
    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            oldPassword: ['', Validators.compose([Validators.required]),PasswordValidators.checkPasswordInServer],
            newPassword: ['', Validators.compose([Validators.required,Validators.minLength(5)])],
            repeatPassword: ['', Validators.compose([Validators.required])]}, {validator: PasswordValidators.checkIfPasswordEqual });
    }

    changePassword(){
         if (this.form.valid)
            alert("Password successfully changed.");
    }
}