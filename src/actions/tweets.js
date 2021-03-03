export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

function receiveTweets(tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}