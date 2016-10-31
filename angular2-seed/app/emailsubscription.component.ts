import {Component} from 'angular2/core';

@Component({
    selector: 'emailSubscription',
    templateUrl: './app/emailsubscription.component.html'
})
export class EmailSubscriptionComponent {
    onSubmit(form){
        console.log(form);
    }
}
