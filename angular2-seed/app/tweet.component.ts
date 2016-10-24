import {Component} from 'angular2/core';
import {LikeComponent} from "./like.component";
import {TweetsService} from "./tweet.service";

@Component({
    selector: 'tweet',
    template: `
<div *ngFor="#tweet of tweets">
<div class="media">
  <div class="media-left">
    <a href="#">
      <img class="media-object" [src]="imgUrl + '?' + tweet.profilePicture" alt="...">
    </a>
  </div>
  <div class="media-body">
    <span class="media-heading">{{tweet.tweetHeader}}</span><span class="tweetUser"> @{{tweet.tweetUser}}</span><br/>
    <span class="tweetPost">{{tweet.tweetPost}}</span>
    <br/><like [totalLikes]="tweet.totalTweetLikes" [iLike]="tweet.iTweetLike"></like>
  </div>
</div>
</div>

`,
    styles: [`
.media{
    padding: 4px;
}
.tweetUser{
    color: lightgray;
}
.tweetPost{
    font-size: 10px;
}
.media-object{
    border-radius: 10px;
    background-position: center;
    padding: 2.5px; 
    width: 80px;
    height: 80px;
}
`],
    directives: [LikeComponent],
    providers: [TweetsService]
})

export class TweetComponent {
    tweets;
    imgUrl = "http://lorempixel.com/100/100/people/"

    constructor(tweetService:TweetsService) {
        this.tweets = tweetService.getTweets();
    }
}