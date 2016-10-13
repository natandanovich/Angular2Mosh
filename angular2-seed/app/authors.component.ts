/**
 * Created by natan on 12/10/2016.
 */
import {Component} from 'angular2/core'
import {AuthorsService} from "./author.service";

@Component({
    selector: 'authors',
    template: `
            <h2>Authors</h2>
            {{ title }}
            <ul>
                <li *ngFor="#author of authors">
                {{ author }}
                </li>
            </ul>
            `,
    providers: [AuthorsService]
})
export class AuthorsComponent {
    title = "The title of authors page";
    authors;

    constructor(authorService:AuthorsService) {
        this.authors = authorService.getAuthors();
    }
}
