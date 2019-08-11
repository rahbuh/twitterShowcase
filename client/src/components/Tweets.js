import React from "react";
import Octicon, { Heart, Sync } from "@primer/octicons-react";
const moment = require("moment");

const Tweets = ({ tweet }) => {
  if (!Object.keys(tweet).length) {
    return null;
  }

  const {
    created_at,
    name,
    screen_name,
    profile_image_url_https,
    text,
    retweet_count,
    favorite_count
  } = tweet;
  let createDate = moment(created_at).format("h:mm A - MMM D, YYYY");

  return (
    <li className="tweet">
      <div className="tweet-meta">
        <img src={profile_image_url_https} alt="User profile" />
        <div className="tweet-meta-text">
          <strong>{name}</strong>&nbsp;@{screen_name}
        </div>
      </div>
      <div className="tweet-text">{text}</div>
      <div>{createDate}</div>
      <div className="counts">
        <Octicon icon={Sync} />
        &nbsp;{retweet_count}&nbsp;&nbsp;&nbsp;
        <Octicon icon={Heart} />
        &nbsp;{favorite_count}
      </div>
    </li>
  );
};

export default Tweets;
