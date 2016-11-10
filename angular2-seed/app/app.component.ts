/// <reference path="../typings/tsd.d.ts" />

import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {retry} from "rxjs/operator/retry";

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control">
    `
})
export class AppComponent {
    ngAfterViewInit() {

        var keyups = Observable.fromEvent($("#search"), "keyup")
            .map(e => e.target.value)
            .filter(text => text.length >= 3)
            .debounceTime(400)
            .distinctUntilChanged()
            .flatMap(searchTerm => {
                var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
                var promise = $.getJSON(url);

                return Observable.fromPromise(promise);
            });

        var subscription = keyups.subscribe(function(data) {
            console.log(data);

        subscription.unsubscribe();
        });

    }

}

