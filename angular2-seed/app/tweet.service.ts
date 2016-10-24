export class TweetsService {
    var
    tweetData = [{
        tweetHeader: "Windward",
        tweetUser: "windwardstudios",
        tweetPost: "Looking for a better company reporting or docgen app?",
        totalTweetLikes: 0,
        iTweetLike: false,
        profilePicture: Math.floor(Math.random() * 100)
    },
        {
            tweetHeader: "AngularJs News",
            tweetUser: "angularjs_news",
            tweetPost: "Right Relevance: Influencers, Articles and Conversations",
            totalTweetLikes: 5,
            iTweetLike: true,
            profilePicture: Math.floor(Math.random() * 100)
        }, {
            tweetHeader: "UX & Bootstrap",
            tweetUser: "3rdwave",
            tweetPost: "10 Reason Why Web Project Fail",
            totalTweetLikes: 1,
            iTweetLike: true,
            profilePicture: Math.floor(Math.random() * 100)
        }];

    getTweets():Tweet [] {
        return this.tweetData;
    }
}