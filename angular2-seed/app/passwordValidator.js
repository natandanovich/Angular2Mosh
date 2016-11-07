System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordValidators;
    return {
        setters:[],
        execute: function() {
            PasswordValidators = (function () {
                function PasswordValidators() {
                }
                PasswordValidators.checkPasswordInServer = function (control) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (control.value != "Aa123456") {
                                console.log("Password InCorrect");
                                resolve({ checkPasswordInServer: true });
                            }
                            else
                                resolve(null);
                        }, 1000);
                    });
                };
                PasswordValidators.checkIfPasswordEqual = function (group) {
                    var newPassword = group.find('newPassword');
                    var repeatPassword = group.find('repeatPassword');
                    if (newPassword.value == repeatPassword.value) {
                        return null;
                    }
                    return { checkIfPasswordEqual: false };
                };
                return PasswordValidators;
            }());
            exports_1("PasswordValidators", PasswordValidators);
        }
    }
});
//# sourceMappingURL=passwordValidator.js.map