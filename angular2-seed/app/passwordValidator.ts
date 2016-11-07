import {Control} from 'angular2/common';
import {ControlGroup} from 'angular2/src/common/forms/model';

export class PasswordValidators {

    static checkPasswordInServer(control: Control) {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                if (control.value != "Aa123456") {
                    console.log("Password InCorrect");
                    resolve({checkPasswordInServer: true});
                }
                else
                    resolve(null);
            }, 1000);
        });
    }

    static checkIfPasswordEqual(group: ControlGroup){
        var newPassword = group.find('newPassword');
        var repeatPassword = group.find('repeatPassword');

        if (newPassword.value == repeatPassword.value) {
                  return null;
        }
        return {checkIfPasswordEqual: false};

    }
}