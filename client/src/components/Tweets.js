import React from "react";
import Octicon, { Heart, Sync } from "@primer/octicons-react";

const Tweets = ({ tweet }) => {
  return (
    <li className="tweet">
      <div className="tweet-meta">
        <img src={tweet.user.profile_image_url_https} alt="User profile" />
        <div className="tweet-meta-text">
          <div>
            <strong>{tweet.user.name}</strong>&nbsp;@{tweet.user.screen_name}
            &nbsp;
          </div>
          <div>-&nbsp;{tweet.created_at}</div>
        </div>
      </div>
      <div className="tweet-text">{tweet.text}</div>
      <div className="counts">
        <Octicon icon={Sync} />&nbsp;{tweet.retweet_count}&nbsp;&nbsp;
        <Octicon icon={Heart} />&nbsp;{tweet.favorite_count}
      </div>
    </li>
  );
};

export default Tweets;
