System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var VoterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoterComponent = (function () {
                function VoterComponent() {
                    this.voterScore = 0;
                    this.originalVoteScore = 0;
                    this.iClickUp = false;
                    this.iClickDown = false;
                }
                VoterComponent.prototype.onClickUp = function () {
                    console.log("Original - " + this.originalVoteScore + ", CurrentVote - " + this.voterScore);
                    if (this.originalVoteScore + 1 != this.voterScore) {
                        this.voterScore++;
                    }
                    if (this.voterScore > this.originalVoteScore)
                        this.iClickUp = true;
                    if (this.voterScore == this.originalVoteScore) {
                        this.iClickUp = false;
                        this.iClickDown = false;
                    }
                };
                VoterComponent.prototype.onClickDown = function () {
                    console.log("Original - " + this.originalVoteScore + ", CurrentVote - " + this.voterScore);
                    if (this.originalVoteScore - 1 != this.voterScore) {
                        this.voterScore--;
                    }
                    if (this.voterScore < this.originalVoteScore)
                        this.iClickDown = true;
                    if (this.voterScore == this.originalVoteScore) {
                        this.iClickUp = false;
                        this.iClickDown = false;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "voterScore", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "originalVoteScore", void 0);
                VoterComponent = __decorate([
                    core_1.Component({
                        selector: 'voter',
                        template: "\n                <div>\n                <i class=\"glyphicon glyphicon-chevron-up\" [class.highlighted]=\"iClickUp\" (click)=\"onClickUp()\"></i>\n                <br>\n                <span>{{voterScore}}</span>\n                <br>\n                <i class=\"glyphicon glyphicon-chevron-down\" [class.highlighted]=\"iClickDown\" (click)=\"onClickDown()\"></i>\n                </div>\n                \n",
                        styles: ["\n        \n        .glyphicon {\n            color: lightgray;\n            cursor: pointer;\n        }\n        \n        .highlighted {\n            color: darkorange;\n        }\n        \n        .div {\n        width: 20px;\n        text-align: center;\n        }\n        \n"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoterComponent);
                return VoterComponent;
            }());
            exports_1("VoterComponent", VoterComponent);
        }
    }
});
//# sourceMappingURL=voter.component.js.map