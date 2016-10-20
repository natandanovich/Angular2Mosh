import {Component} from 'angular2/core';
import {VoterComponent} from "./voter.component";

@Component({
    selector: 'my-app',
    template: '<voter [voterScore]="campaignA.voterScore" [originalVoteScore]="campaignA.voterScore"></voter>',
    directives: [VoterComponent]
})
export class AppComponent {
    campaignA = {
        voterScore: 10
    }
}