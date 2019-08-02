import React from "react";
import Octicon, { Heart, Sync } from "@primer/octicons-react";

const Tweets = ({ tweet }) => {
  const {created_at, text, retweet_count, favorite_count } = tweet;
  const {name, screen_name, profile_image_url_https } = tweet.user

  return (
    <li className="tweet">
      <div className="tweet-meta">
        <img src={profile_image_url_https} alt="User profile" />
        <div className="tweet-meta-text">
          <div>
            <strong>{name}</strong>&nbsp;@{screen_name}
            &nbsp;
          </div>
          <div>-&nbsp;{created_at}</div>
        </div>
      </div>
      <div className="tweet-text">{text}</div>
      <div className="counts">
        <Octicon icon={Sync} />
        &nbsp;{retweet_count}&nbsp;&nbsp;
        <Octicon icon={Heart} />
        &nbsp;{favorite_count}
      </div>
    </li>
  );
};

export default Tweets;
