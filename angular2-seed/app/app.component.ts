/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control">
    `
})
export class AppComponent {
    constructor() {
        var debounced =  _.debounce(function (text){

            var url = "https://api.spotify.com/v1/search?type=artist&q=" + text;
            $.getJSON(url, function (artists) {
                console.log(artists);
            })
        }, 400);

        $("search").keyup(function (e) {
            var text = e.target.value;

            if (text.length < 3)
                return;

            debounced(text);

        })
    }
}