import React from "react";

const Tweets = ({ tweet }) => {
  return (
    <li className="tweet">
      <div className="tweet-meta">
        <img src={tweet.user.profile_image_url} alt="User profile" />
        <div className="tweet-meta-text">
          <div>
            <strong>{tweet.user.name}</strong>&nbsp;@{tweet.user.screen_name}&nbsp;
          </div>
          <div>-&nbsp;{tweet.user.created_at}</div>
        </div>
      </div>
      <div className="tweet-text">{tweet.text}</div>
    </li>
  );
};

export default Tweets;
