import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html'
    styles: [`
    .glyphicon-heart {
        color: lightgray;
        cursor: pointer;
    }
    .glyphicon-heart-empty {
        color: deeppink;
        cursor: pointer;
    }
`]
})

export class FavoriteComponent {
    @Input() isFavorite = false;

    @Output() change = new EventEmitter();

    onClick($event) {
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue: this.isFavorite});
    }
}