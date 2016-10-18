import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <i class="glyphicon" [class.glyphicon-star-empty]="isActive===false" [class.glyphicon-star]="isActive" (click)="onClick()"></i>
        
`
})
export class AppComponent {
    title = "Angular App";
    imageUrl = "./images/outline_star.png"
    isActive = true;
    onClick(){
        if (this.isActive == true)
        {
            this.isActive = false;
        }
        else
        {
            this.isActive = true;
        }
    }
}