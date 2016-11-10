import {Component, OnInit} from '@angular/core';
import {PostService} from './post.service';


@Component({
    selector: 'my-app',
    template: `<h1>My First Angular App</h1>
                <div *ngIf="isLoading">
                <i class="fa fa-spinner fa-spin"></i>
</div>
`,
    providers: [PostService]

})
export class AppComponent implements OnInit {

    isLoading = true;

    ngOnInit(): void {
            this._postService.getPosts().subscribe(posts => {
                this.isLoading = false;
                console.log(posts[0].title);

            });
    }

    constructor(private _postService: PostService) {
        //this._postService.createPost({userId: 1, title: "a", body: "b"})
    }
}
