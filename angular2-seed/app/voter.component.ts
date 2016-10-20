import {Component, Input} from 'angular2/core';

@Component({
    selector: 'voter',
    template: `
                <div>
                <i class="glyphicon glyphicon-chevron-up" [class.highlighted]="iClickUp" (click)="onClickUp()"></i>
                <br>
                <span>{{voterScore}}</span>
                <br>
                <i class="glyphicon glyphicon-chevron-down" [class.highlighted]="iClickDown" (click)="onClickDown()"></i>
                </div>
                
`,
    styles: [`
        
        .glyphicon {
            color: lightgray;
            cursor: pointer;
        }
        
        .highlighted {
            color: darkorange;
        }
        
        .div {
        width: 20px;
        text-align: center;
        }
        
`]

})
export class VoterComponent {
    @Input() voterScore = 0;
    @Input() originalVoteScore = 0;
    iClickUp = false;
    iClickDown = false;

    onClickUp() {
        console.log("Original - " + this.originalVoteScore + ", CurrentVote - " + this.voterScore)
        if (this.originalVoteScore + 1 != this.voterScore) {
            this.voterScore++;
        }
        if (this.voterScore > this.originalVoteScore)
            this.iClickUp = true;
        if (this.voterScore == this.originalVoteScore) {
            this.iClickUp = false;
            this.iClickDown = false;
        }
    }

    onClickDown() {
        console.log("Original - " + this.originalVoteScore + ", CurrentVote - " + this.voterScore)
        if (this.originalVoteScore - 1 != this.voterScore) {
            this.voterScore--;
        }
        if (this.voterScore < this.originalVoteScore)
            this.iClickDown = true;
        if (this.voterScore == this.originalVoteScore) {
            this.iClickUp = false;
            this.iClickDown = false;
        }
    }

}