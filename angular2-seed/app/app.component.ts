import {Component} from 'angular2/core';
import {ContactFormComponent} from "./contact-form.component";

@Component({
    selector: 'my-app',
    template: '<div class="formArea"><contact-form></contact-form></div>',
    directives: [ContactFormComponent],
    styles: [`
    .formArea{
        padding: 50px;
    }
    `]
})
export class AppComponent {
}