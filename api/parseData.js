const parseData = data => {
  return data.map(tweet => {
    const { id, created_at, text, retweet_count, favorite_count } = tweet;
    const { name, screen_name, profile_image_url_https } = tweet.user;

    return {
      id,
      created_at,
      name,
      screen_name,
      profile_image_url_https,
      text,
      retweet_count,
      favorite_count
    };
  });
};

module.exports = parseData;
