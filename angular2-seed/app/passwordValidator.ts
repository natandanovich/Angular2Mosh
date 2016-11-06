import {Control} from 'angular2/common';

export class PasswordValidators {

    static passwordShouldBeAtLeastXChar(control: Control){
        if (control.value.toString().length <= 5)
            return {passwordShouldBeAtLeastXChar: true};

        return null;
    }


}