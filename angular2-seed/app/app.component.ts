import {Component} from 'angular2/core';
import {SignUpFormComponent} from './signup-form.component'

@Component({
    selector: 'my-app',
    directives: [SignUpFormComponent],
    template: `
        <div class="formSignup">
         <signup-form></signup-form>
        </div>
    `,
    styles: [`
        .formSignup{
        padding: 50px;
        }`]
})
export class AppComponent {
}