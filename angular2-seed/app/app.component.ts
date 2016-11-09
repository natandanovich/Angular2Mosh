/// <reference path="../typings/tsd.d.ts" />

import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control">
    `
})
export class AppComponent {
    ngAfterViewInit() {

        var keyups = Observable.fromEvent($("#search"), "keyup");

        keyups.subscribe(function(data) {
            console.log(data);
        });

    }

}

