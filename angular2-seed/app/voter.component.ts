import {Component, Input} from 'angular2/core';

@Component({
    selector: 'voter',
    template: `
                <span class="glyphicon glyphicon-chevron-up" [class.highlighted]="iClickUp" (click)="onClickUp()"></span>
                <br>
                <span>{{voterScore}}</span>
                <br>
                <span class="glyphicon glyphicon-chevron-down" [class.highlighted]="iClickDown" (click)="onClickDown()"></span>
`,
    styles: [`
        .glyphicon {
            color: lightgray;
            cursor: pointer;
        }
        
        .highlighted {
            color: darkorange;
        }
`]

})
export class VoterComponent {
    @Input() voterScore = 0;
    @Input() originalVoteScore = 0;
    iClickUp = false;
    iClickDown = false;
    onClickUp(){
        console.log("Original - " + this.originalVoteScore + ", CurrentVote - " + this.voterScore)
        if (this.originalVoteScore+1 != this.voterScore ) {
            this.voterScore++;
        }
        if (this.voterScore > this.originalVoteScore)
            this.iClickUp = true;
        if (this.voterScore == this.originalVoteScore)
        {
            this.iClickUp = false;
            this.iClickDown = false;
        }
    }
    onClickDown(){
        console.log("Original - " + this.originalVoteScore + ", CurrentVote - " + this.voterScore)
        if (this.originalVoteScore-1 != this.voterScore ) {
            this.voterScore--;
        }
        if (this.voterScore < this.originalVoteScore)
            this.iClickDown = true;
        if (this.voterScore == this.originalVoteScore)
        {
            this.iClickUp = false;
            this.iClickDown = false;
        }
    }

}