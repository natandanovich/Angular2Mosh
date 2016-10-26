import {Component} from 'angular2/core';
import {ZippyComponent} from "./zippy.component";

@Component({
    selector: 'my-app',
    template: `
                <div class="panelconf">
                <zippy title="Who can see my stuff?">
                Content of who can see my stuff</zippy>
                <zippy title="Whc can contact me?">
                Content of who can contact me</zippy>
                </div>`,
    styles: [`
                .panelconf{
                width: 220px;
                }
            `] ,
    directives: [ZippyComponent]
})
export class AppComponent { }