/// <reference path="../typings/tsd.d.ts" />
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var keyups = Rx_1.Observable.fromEvent($("#search"), "keyup")
            .map(function (e) { return e.target.value; })
            .filter(function (text) { return text.length >= 3; })
            .debounceTime(400)
            .distinctUntilChanged()
            .flatMap(function (searchTerm) {
            var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
            var promise = $.getJSON(url);
            return Rx_1.Observable.fromPromise(promise);
        });
        var subscription = keyups.subscribe(function (data) {
            console.log(data);
            subscription.unsubscribe();
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <input id=\"search\" type=\"text\" class=\"form-control\">\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map