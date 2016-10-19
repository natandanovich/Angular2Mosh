import {Component} from 'angular2/core';
import {FavoriteComponent} from './favorite.component'

@Component({
    selector: 'my-app',
    template: `
        <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite> {{i}}
`,
    directives: [FavoriteComponent]
})
export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true
    }
    i: number = 10;
    onFavoriteChange($event) {
        console.log($event.newValue);
        if ($event.newValue==false)
        {
            this.i++;
        }
        else
        {
            this.i--;
        }
    }
}