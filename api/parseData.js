const parseData = data => {
  const tweets = [];
  data.map(tweet => {
    const { id, created_at, text, retweet_count, favorite_count } = tweet;
    const { name, screen_name, profile_image_url_https } = tweet.user;

    tweets.push({
      id,
      created_at,
      name,
      screen_name,
      profile_image_url_https,
      text,
      retweet_count,
      favorite_count
    });
  });

  return tweets;
};

module.exports = parseData;
