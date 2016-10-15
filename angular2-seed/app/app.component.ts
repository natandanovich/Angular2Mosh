import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <!--<input type="text" [value]="title" (input)="title = $event.target.value"/>-->
        <input type="text" [(ngModel)]="title" />
        <input type="button" (click)="title = ''" value="Clear"/>
        Preview: {{ title}}
        
`
})
export class AppComponent {
    title = "Angular App";
}