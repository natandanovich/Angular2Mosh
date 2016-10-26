import {Component, Input} from "angular2/core";

@Component({
    selector: 'zippy',
    template: `
            <div class="panel panel-default">
              <div class="panel-heading">
                  {{title}} 
                  <i
                  class="pull-right glyphicon"
                  [ngClass]="{
                    'glyphicon-chevron-down': !isOpen,
                    'glyphicon-chevron-up': isOpen
                    }" 
                  (click)="onClick()">
                  </i>
              </div>
              <div *ngIf="isOpen == true" class="panel-body">
                <ng-content></ng-content>
              </div>
            </div>
`,
    styles: [`
            .glyphicon {
            cursor: pointer;
            padding: 5px;
            }
            
             .panel-heading {
            font-weight: bold;
            }
            
            .panel-heading:hover {
            background-color: lightgray;
            }
            `]
})

export class ZippyComponent {
    isOpen = false;
@Input() title='';
    onClick() {
        this.isOpen = !this.isOpen;
    }
}