import {Component} from 'angular2/core';
import {EmailSubscriptionComponent} from "./emailsubscription.component";

@Component({
    selector: 'my-app',
    template: `<div class="mailForm">
                <emailSubscription></emailSubscription>
               </div>

`,
    styles: [`
    .mailForm {
    padding: 50px;
    }
    `],
    directives: [EmailSubscriptionComponent],
})
export class AppComponent {
}